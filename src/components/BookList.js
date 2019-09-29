import React, { Component } from "react";

class BookList extends Component {
  render() {
    return (
      <div className="booklist">
        <ul>
          <li>The New Hope</li>
          <li>The Empire Stikes Back</li>
          <li>THe Return of the Jedi</li>
        </ul>
      </div>
    );
  }
}

export default BookList;
