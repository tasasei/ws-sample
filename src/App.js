import React from "react";
import Damage from "./components/Damage";
import "./App.css";
import Concentrate from "./components/Concentrate";

function App() {
  return (
    <div className="App">
      <body className="App-body">
        <div>
          <div style={{ fontSize: "1.5rem" }}>集中ヒット率計算</div>
          <Concentrate />
        </div>
        <div style={{ marginBottom: "30px" }} />
        <div>
          <div style={{ fontSize: "1.5rem" }}>ダメージ期待値計算</div>
          <Damage />
        </div>
      </body>
    </div>
  );
}

export default App;
