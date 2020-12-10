import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

function Search() {
  // Setting our component's initial state
  const [bookName, setBookName] = useState("");
  const [googleBooks, setGoogleBooks] = useState([])

  const saveBookHandler = (index) => {
    // console.log('Entered in saveBookHandler');
    const data = googleBooks[index];
    API.saveBook(data)
      .then(() => {})//console.log(res)})
      .catch(err => console.log("Error", err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    setBookName(event.target.value)
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (bookName) {
      API.getGoogleBooks(bookName)
        .then(res => {
          setGoogleBooks(res.data.items.map(({ volumeInfo }) => {
            return {
              title: volumeInfo.title,
              description: volumeInfo.description,
              authors: volumeInfo.authors,
              image: volumeInfo.imageLinks.thumbnail,
              link: volumeInfo.infoLink
            }
          }))
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <Container fluid>

      <form>
        <Row>
          <Col size="md-10">
            <Input
              onChange={handleInputChange}
              name="title"
              placeholder="Book Name"
            />
          </Col>
          <Col size="md-2">
            <FormBtn
              onClick={handleFormSubmit}
            >Search</FormBtn>
          </Col>
        </Row>
      </form>

      {googleBooks.length ? (
        <List>
          <h5 className="ml-4 mt-2">Results:</h5>
          {googleBooks.map((book, index) => (
            <ListItem
              key={index}
              name={"Save"}
              index={index}
              book={book}
              clicked={saveBookHandler} />
          ))}
        </List>
      ) : (<h3>No Results to Display</h3>)
      }

    </Container>
  );
}


export default Search;