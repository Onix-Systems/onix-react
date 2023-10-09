import React, { useRef } from 'react';
import useHotkeys from './useHotkeys';

function App() {
  const containerRef = useRef(null);

  const handleIncrement = () => {
    // Code to handle the 'Ctrl + K' shortcut
  };

  const shortcuts = {
    'ctrl+k': {
      key: 'k',
      callback: handleIncrement,
    },
  };
  useHotkeys(shortcuts, containerRef.current);

  return (
    <div ref={containerRef}>
      <p>Press 'Ctrl + K' </p>
    </div>
  );
}

export default App;
