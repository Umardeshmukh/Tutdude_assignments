import React, { Component } from 'react';
import './Counter.css';

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  render() {
    return (
      <div className="counter-card">
        <h2 className="component-heading">Class Component</h2>
        <div className="count-display">
          <span className="count-number">{this.state.count}</span>
        </div>
        <div className="button-container">
          <button 
            className="btn btn-minus"
            onClick={this.decrement}
            disabled={this.state.count === 0}
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
        <p className="info-text">Minimum value: 0</p>
      </div>
    );
  }
}

export default CounterClass;
