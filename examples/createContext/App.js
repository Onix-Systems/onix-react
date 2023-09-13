import React from 'react';
import ThemeContext from './context';

function App() {
  const theme = 'light';

  return (
   <ThemeContext.Provider value={theme}>
    {/* Your app components */}
   </ThemeContext.Provider>
  );
}
