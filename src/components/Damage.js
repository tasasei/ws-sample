import React, { useState } from "react";
import { Button, Form, InputGroup, FormControl } from "react-bootstrap";
import { averageDamage } from "../calc/execute";

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
    <Form>
      <Form.Group>
        <Form.Label>デッキ枚数</Form.Label>
        <Form.Control
          value={deckNum}
          onChange={(e) => setDeckNum(e.target.value)}
          type="number"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>CX枚数</Form.Label>
        <Form.Control
          value={cxNum}
          onChange={(e) => setCxNum(e.target.value)}
          type="numnber"
        />
      </Form.Group>
      <Form.Group>
        ダメージ
        <Button
          variant="secondary"
          onClick={() => setDamageArray(damageArray.concat([1]))}
        >
          +
        </Button>
        {damageArray.map((e, i) => (
          <InputGroup>
            <FormControl
              value={e}
              onChange={(e) => {
                damageArray[i] = Number(e.target.value);
                setDamageArray(damageArray.slice());
              }}
              type="number"
            />
            <InputGroup.Prepend>
              <Button
                variant="outline-secondary"
                onClick={() =>
                  setDamageArray(
                    damageArray.filter((value, index) => index !== i)
                  )
                }
                hidden={damageArray.length < 2}
              >
                -
              </Button>
            </InputGroup.Prepend>
          </InputGroup>
        ))}
      </Form.Group>
      <Form.Group>
        <Form.Label>計算ループ回数</Form.Label>
        <Form.Control
          value={loopNum}
          onChange={(e) => setLoopNum(e.target.value)}
          type="numnber"
        />
      </Form.Group>
      <div>
        <Button
          onClick={(e) =>
            setResDamage(averageDamage(deckNum, cxNum, damageArray, loopNum))
          }
        >
          ダメージ期待値計算ボタン
        </Button>
        <span class="ml-3" style={{ fontWeight: "bold" }}>
          ダメージ期待値 = {resDamage}
        </span>
      </div>
    </Form>
  );
}
