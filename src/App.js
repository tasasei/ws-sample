import React from "react";
import Damage from "./Damage";
import "./App.css";
import Concentrate from "./Concentrate";

function App() {
  return (
    <div className="App">
      <body className="App-body">
        <div style={{ marginBottom: "30px" }}>
          <Concentrate />
        </div>
        <div>
          <Damage />
        </div>
      </body>
    </div>
  );
}

export default App;
