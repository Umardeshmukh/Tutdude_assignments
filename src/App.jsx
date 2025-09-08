// App.js - This is the main component that brings everything together
import React from 'react';
import CounterClass from './CounterClass.jsx';
import CounterFunction from './CounterFunction.jsx';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Main heading as required */}
      <h1 className="main-heading">Assignment-2 Counter Application</h1>
      
      {/* Container to show both components in a row */}
      <div className="counters-row">
        <CounterClass />
        <CounterFunction />
      </div>
    </div>
  );
}

export default App;
