import React, { useState } from "react";
import { averageDamage } from "./calc/execute";

const defaultDeckNum = 50;
const defaultCxNum = 8;
const defaultDamageArray = [2, 2, 2];
const defaultLoopNum = 10000;
const defaultResult = averageDamage(
  defaultDeckNum,
  defaultCxNum,
  defaultDamageArray,
  defaultLoopNum
);

export default function Concentrate() {
  const [deckNum, setDeckNum] = useState(defaultDeckNum);
  const [cxNum, setCxNum] = useState(defaultCxNum);
  const [damageArray, setDamageArray] = useState(defaultDamageArray);
  const [loopNum, setLoopNum] = useState(defaultLoopNum);
  const [resDamage, setResDamage] = useState(defaultResult);

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
