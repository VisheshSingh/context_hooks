import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

const Navbar = () => {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const { isLight, light, dark } = useContext(ThemeContext);
  const theme = isLight ? light : dark;
  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Context App</h1>
      <button onClick={toggleAuth}>
        {isAuthenticated ? 'Log out' : 'Log in'}
      </button>
      <div>
        {isAuthenticated ? (
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact us</li>
          </ul>
        ) : (
          ''
        )}
      </div>
    </nav>
  );
};

export default Navbar;
