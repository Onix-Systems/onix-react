import React, { useContext } from 'react';
import ThemeContext from './context';

function ThemeButton() {
  const theme = useContext(ThemeContext);

  return (
   <button style={{ background: theme === 'light' ? 'white' : 'black', color: theme === 'light' ? 'black' : 'white' }}>
    Toggle Theme
   </button>
  );
}

export default ThemeButton;
