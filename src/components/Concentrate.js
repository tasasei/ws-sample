import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
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
        <Form.Label>めくる枚数</Form.Label>
        <Form.Control
          value={flipNum}
          onChange={(e) => setFlipNum(e.target.value)}
          type="numnber"
        />
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
            setResConcentrate(
              averageConcentration(deckNum, cxNum, flipNum, loopNum)
            )
          }
        >
          集中ヒット率計算ボタン
        </Button>
        <span class="ml-3" style={{ fontWeight: "bold" }}>
          集中ヒット率 = {resConcentrate}
        </span>
      </div>
    </Form>
  );
}
