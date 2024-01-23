import React, { useState } from 'react';
import useDebounce from './useDebounce';

const ExampleComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <p>Real-time value: {inputValue}</p>
      <p>Debounced value: {debouncedValue}</p>

      <input type="text" value={inputValue} onChange={handleChange} />
    </div>
  );
};

export default ExampleComponent;
