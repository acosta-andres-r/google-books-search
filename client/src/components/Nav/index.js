import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
      <span className="navbar-brand mr-4 h1">
        Google Books
      </span>
      <a className="navbar-brand m-2" href="/">
        Search
      </a>
      <a className="navbar-brand m-2" href="/save">
        Saved
      </a>
    </nav>
  );
}

export default Nav;
