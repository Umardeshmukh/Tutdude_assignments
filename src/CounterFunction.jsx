// CounterFunction.js - Counter using Functional Component with Hooks
import React, { useState } from 'react';
import './Counter.css';

function CounterFunction() {
  // Step 1: Use useState hook to manage count state
  const [count, setCount] = useState(0);  // Starting count is 0

  // Step 2: Function to increase count by 1
  const increment = () => {
    setCount(count + 1);
  };

  // Step 3: Function to decrease count by 1 (but not below 0)
  const decrement = () => {
    // Check if count is greater than 0 before decreasing
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // Step 4: Return the component JSX
  return (
    <div className="counter-card">
      {/* Component heading */}
      <h2 className="component-heading">Function Component</h2>
      
      {/* Display current count */}
      <div className="count-display">
        <span className="count-number">{count}</span>
      </div>
      
      {/* Buttons for increment and decrement */}
      <div className="button-container">
        <button 
          className="btn btn-minus"
          onClick={decrement}
          disabled={count === 0}  // Disable when count is 0
        >
          -
        </button>
        
        <button 
          className="btn btn-plus"
          onClick={increment}
        >
          +
        </button>
      </div>
      
      {/* Information text */}
      <p className="info-text">Minimum value: 0</p>
    </div>
  );
}

export default CounterFunction;
