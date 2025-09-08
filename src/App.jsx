import React from 'react';
import CounterClass from './CounterClass.jsx';
import CounterFunction from './CounterFunction.jsx';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1 className="main-heading">Assignment-2 Counter Application</h1>
      <div className="counters-row">
        <CounterClass />
        <CounterFunction />
      </div>
    </div>
  );
}

export default App;
