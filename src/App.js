import React, { useState } from 'react';
import { averageConcentration, averageDamage } from './calc/execute';
import './Concentrate'
import './App.css';
import Concentrate from './Concentrate';

function App() {
  return (
    <div className="App">
      <body className="App-body">
        <Concentrate />
      </body>
    </div>
  );
}

export default App;
