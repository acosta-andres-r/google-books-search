import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 150, clear: "both", paddingTop: 40, textAlign: "center" }}
      className="jumbotron"
    >
      <h1>Google Books Search</h1>
      <h5>Search and Save Books of Interest</h5>
    </div>
  );
}

export default Jumbotron;
