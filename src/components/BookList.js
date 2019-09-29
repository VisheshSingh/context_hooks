import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';
import { BookContext } from '../contexts/BookContext';

const BookList = () => {
  const { isLight, light, dark } = useContext(ThemeContext);
  const { isAuthenticated } = useContext(AuthContext);
  const { books } = useContext(BookContext);
  const theme = isLight ? light : dark;
  return (
    <div
      className='booklist'
      style={{ background: theme.bg, color: theme.syntax }}
    >
      {isAuthenticated ? (
        <ul>
          {books.map(book => (
            <li key={book.id} style={{ background: theme.ui }}>
              {book.title}
            </li>
          ))}
        </ul>
      ) : (
        "You're logged out"
      )}
    </div>
  );
};

export default BookList;
