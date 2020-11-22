import React, { useState } from 'react';
import './App.css';

function App() {
  const [count1, setCount1] = useState(7)
  const [count2, setCount2] = useState(4)

  return (
    <div className="App">
      <body className="App-body">
        <div>
          sample1
          <input
            value={count1}
            onChange={e => setCount1(e.target.value)}
            type="number"
          />
        </div>
        <div>
          sample2
          <input 
            value={count2}
            onChange={e => setCount2(e.target.value)}
            type="numnber"
           />
        </div>
        <div>
          sample1 + sample2 = {(Number(count1) || 0) + (Number(count2) || 0)}
        </div>
      </body>
    </div>
  );
}

export default App;
