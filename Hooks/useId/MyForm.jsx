import { useId } from 'react';

const MyForm = () => {
  const inputId = useId();
  const labelId = useId();
  
  return (
    <div>
      <label htmlFor={inputId}>Name:</label>
      <input id={inputId} type="text" />
    
      <label htmlFor={labelId}>Email:</label>
      <input id={labelId} type="email" />
    </div>
  );
};
