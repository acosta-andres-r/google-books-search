import axios from "axios";

const api = {
  // Gets all books
  getBooks: function () {
    return axios.get("/api/books");
  },
  // Gets the Book with the given id
  getBook: function (id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },
  // Update a book to the database
  updateBook: function (id, bookData) {
    return axios.put("/api/books/" + id, bookData)
  },

  // Google Books API
  getGoogleBooks: function(bookName) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + bookName)
  }
};

export default api