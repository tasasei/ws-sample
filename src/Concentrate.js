import React, { useState } from "react";
import { averageConcentration } from "./calc/execute";

export default function Concentrate() {
  const [deckNum, setDeckNum] = useState(50);
  const [cxNum, setCxNum] = useState(8);
  const [flipNum, setFlipNum] = useState(4);
  const [resConcentrate, setResConcentrate] = useState(-1);

  return (
    <>
      <div>
        デッキ枚数
        <input
          value={deckNum}
          onChange={(e) => setDeckNum(e.target.value)}
          type="number"
        />
      </div>
      <div>
        CX枚数
        <input
          value={cxNum}
          onChange={(e) => setCxNum(e.target.value)}
          type="numnber"
        />
      </div>
      <div>
        めくる枚数
        <input
          value={flipNum}
          onChange={(e) => setFlipNum(e.target.value)}
          type="numnber"
        />
      </div>
      <div>
        <button
          onClick={(e) =>
            setResConcentrate(averageConcentration(deckNum, cxNum, flipNum))
          }
        >
          集中ヒット率計算ボタン
        </button>
      </div>
      <div>集中ヒット率 = {resConcentrate}</div>
    </>
  );
}
