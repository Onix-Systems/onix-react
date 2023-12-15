import React from 'react';
import useCopyToClipboard from './useCopyToClipboard'; 

const Component = () => {
  const [value, copyHandler] = useCopyToClipboard(); 

  return (
    <>
      <h1>Click to copy:</h1>
      <div style={{ display: 'flex' }}>
        <button onClick={() => copyHandler('A')}>A</button>
        <button onClick={() => copyHandler('B')}>B</button>
        <button onClick={() => copyHandler('C')}>C</button>
      </div>
      <p>Copied value: {value ?? 'Nothing is copied yet!'}</p>
    </>
  );
};

export default Component;
