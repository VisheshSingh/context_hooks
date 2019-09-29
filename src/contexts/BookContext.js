import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, setBooks] = useState([
    { id: 1, title: 'A new hope' },
    { id: 2, title: 'Empire strike back' },
    { id: 3, title: 'The Return of the Jedi' }
  ]);
  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
