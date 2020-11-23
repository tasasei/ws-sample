import React, { useState } from "react";
import { averageConcentration } from "../calc/execute";

const defaultDeckNum = 50;
const defaultCxNum = 8;
const defaultFlipNum = 4;
const defaultLoopNum = 10000;
const defaultResult = averageConcentration(
  defaultDeckNum,
  defaultCxNum,
  defaultFlipNum,
  defaultLoopNum
);

export default function Concentrate() {
  const [deckNum, setDeckNum] = useState(defaultDeckNum);
  const [cxNum, setCxNum] = useState(defaultCxNum);
  const [flipNum, setFlipNum] = useState(defaultFlipNum);
  const [loopNum, setLoopNum] = useState(defaultLoopNum);
  const [resConcentrate, setResConcentrate] = useState(defaultResult);

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
        計算ループ回数
        <input
          value={loopNum}
          onChange={(e) => setLoopNum(e.target.value)}
          type="numnber"
        />
      </div>
      <div>
        <button
          onClick={(e) =>
            setResConcentrate(
              averageConcentration(deckNum, cxNum, flipNum, loopNum)
            )
          }
        >
          集中ヒット率計算ボタン
        </button>
      </div>
      <div>集中ヒット率 = {resConcentrate}</div>
    </>
  );
}
