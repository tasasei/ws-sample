import React, { useState } from "react";
import { averageDamage } from "./calc/execute";

export default function Concentrate() {
  const [deckNum, setDeckNum] = useState(50);
  const [cxNum, setCxNum] = useState(8);
  const [damageArray, setDamageArray] = useState([2, 2, 2]);
  const [loopNum, setLoopNum] = useState(10000);
  const [resDamage, setResDamage] = useState(-1);

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
        ダメージ
        <button onClick={() => setDamageArray(damageArray.concat([1]))}>
          +
        </button>
        {damageArray.map((e, i) => (
          <div>
            <input
              value={e}
              onChange={(e) => {
                damageArray[i] = Number(e.target.value);
                setDamageArray(damageArray.slice());
              }}
              type="number"
            />
            <button
              onClick={() =>
                setDamageArray(
                  damageArray.filter((value, index) => index !== i)
                )
              }
              hidden={damageArray.length < 2}
            >
              -
            </button>
          </div>
        ))}
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
            setResDamage(averageDamage(deckNum, cxNum, damageArray, loopNum))
          }
        >
          ダメージ期待値計算ボタン
        </button>
      </div>
      <div>ダメージ期待値 = {resDamage}</div>
    </>
  );
}
