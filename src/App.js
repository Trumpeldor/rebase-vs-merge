import React from 'react';
import Form from './components/Form';
import Forecasts from './components/Forecasts';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="logo" />
      <Form />
      <Forecasts />
    </div>
  );
}

export default App;
