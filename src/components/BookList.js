import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class BookList extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLight, light, dark } = this.context;
    const theme = isLight ? light : dark;
    return (
      <div
        className="booklist"
        style={{ background: theme.bg, color: theme.syntax }}
      >
        <ul>
          <li style={{ background: theme.ui }}>The New Hope</li>
          <li style={{ background: theme.ui }}>The Empire Stikes Back</li>
          <li style={{ background: theme.ui }}>THe Return of the Jedi</li>
        </ul>
      </div>
    );
  }
}

export default BookList;
