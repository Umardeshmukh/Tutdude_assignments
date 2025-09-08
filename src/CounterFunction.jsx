
import React, { useState } from 'react';
import './Counter.css';
function CounterFunction() {
  const [count, setCount] = useState(0);  
   const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className="counter-card">
      <h2 className="component-heading">Function Component</h2>
       <div className="count-display">
        <span className="count-number">{count}</span>
      </div>
      
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
      

      <p className="info-text">Minimum value: 0</p>
    </div>
  );
}

export default CounterFunction;
