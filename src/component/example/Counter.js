import React, { useState } from 'react';

const Counter = () => {
  // Initialize state for the counter
  const [count, setCount] = useState(0);

  // Function to increment the counter
  const increment = () => setCount(count + 1);

  // Function to decrement the counter
  const decrement = () => setCount(count - 1);

  // Function to reset the counter
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>React Counter</h1>
      <h2>{count}</h2>
      <div style={{ textAlign: 'center', marginTop: '20px' , display: 'flex' , alignItems: 'center'}}>
      <button onClick={increment} >
        Increment
      </button>
      <button onClick={decrement} >
        Decrement
      </button>
      <button onClick={reset} >
        Reset
      </button>
      </div>
    </div>
  );
};

export default Counter;
