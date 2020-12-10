import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import API from "../utils/API";

function Detail() {

  const [savedBooks, setSavedBooks] = useState([])

  useEffect(() => {
    readAllBooksHandler();
  }, [])

  const readAllBooksHandler = () => {
    // console.log('Entered in readAllBook');
    API.getBooks()
      .then(res => {
        // console.log(res.data)
        setSavedBooks(res.data)
      })
      .catch(err => console.log(err));
  }

  const removeBookHandler = (id) => {
    // console.log('Entered in deleteBook');
    API.deleteBook(id)
      .then(res => {
        // console.log(res)
        readAllBooksHandler()
      })
      .catch(err => console.log(err));
  }

  return (
    <Container fluid>

      {savedBooks.length ? (
        <List>
          <h5 className="ml-4 mt-2">Results:</h5>
          {savedBooks.map((book, index) => (
            <ListItem
              key={index} // Object ID
              name={"Remove"}
              index={book._id}
              book={book}
              clicked={removeBookHandler} />
          ))}
        </List>
      ) : (<h3>No Results to Display</h3>)
      }

      <Row>
        <Col size="md-2">
          <Link to="/">← Back to Search</Link>
        </Col>
      </Row>
    </Container>
  );
}


export default Detail;
