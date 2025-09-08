// CounterClass.js - Counter using Class Component
import React, { Component } from 'react';
import './Counter.css';

class CounterClass extends Component {
  // Step 1: Initialize state in constructor
  constructor(props) {
    super(props);
    this.state = {
      count: 0  // Starting count is 0
    };
  }

  // Step 2: Function to increase count by 1
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // Step 3: Function to decrease count by 1 (but not below 0)
  decrement = () => {
    // Check if count is greater than 0 before decreasing
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  // Step 4: Render the component
  render() {
    return (
      <div className="counter-card">
        {/* Component heading */}
        <h2 className="component-heading">Class Component</h2>
        
        {/* Display current count */}
        <div className="count-display">
          <span className="count-number">{this.state.count}</span>
        </div>
        
        {/* Buttons for increment and decrement */}
        <div className="button-container">
          <button 
            className="btn btn-minus"
            onClick={this.decrement}
            disabled={this.state.count === 0}  // Disable when count is 0
          >
            -
          </button>
          
          <button 
            className="btn btn-plus"
            onClick={this.increment}
          >
            +
          </button>
        </div>
        
        {/* Information text */}
        <p className="info-text">Minimum value: 0</p>
      </div>
    );
  }
}

export default CounterClass;
