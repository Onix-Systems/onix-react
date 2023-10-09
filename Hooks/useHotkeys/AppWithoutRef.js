import React from 'react';
import useHotkeys from './useHotkeys';

function App() {
  const handleIncrement = () => {
    // Code to handle the 'Ctrl + K' shortcut
  };

  const shortcuts = {
    'ctrl+k': {
      key: 'k',
      callback: handleIncrement,
    },
  };
  useHotkeys(shortcuts);

  return (
    <div>
      <p>Press 'Ctrl + K' </p>
    </div>
  );
}

export default App;
