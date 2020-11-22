'use strict';

const ws = require('./wsdeck.js');

/**
 * X枚集中を1回打った時のHit数（率）
 * @param {number} deckNum デッキ枚数
 * @param {number} cxNum CX枚数
 * @param {number} flipNumber めくる枚数
 * @param {number} loopNum ループ回数
 */
function averageConcentration (deckNum, cxNum, flipNum, loopNum=10000) {
  let total = 0;
  for(let i=1; i<loopNum; i++){
    // デッキの内容を設定(CXを含む山札枚数,CX)
    let deck = ws.createDeck(deckNum, cxNum);
    // めくる(さっき作ったデッキ,めくる枚数)
    deck = ws.concentration(deck, flipNum);
    total += deck.hit;
  };
  // 平均Hit率
  return total/loopNum;
}

/**
 * 指定のダメージを与えたときの平均打点
 * @param {number} deckNum デッキ枚数
 * @param {number} cxNum CX枚数
 * @param {Array.<number>} flipArray ダメージ配列(ex. [2,2,2])
 * @param {number} loopNum ループ回数
 */
function averageDamage (deckNum, cxNum, flipArray, loopNum=10000) {
  let totalDamage = 0;
  for (let i=0; i<loopNum; i++){
    let turnDamage = 0;
    let deck = ws.createDeck(deckNum,cxNum);
    // 与えたい打点[2点,2点,2点]
    const DMG_ARRAY = flipArray;
    DMG_ARRAY.forEach( dmg => {
      const res = ws.cancelOrNot(deck,dmg);
      deck = res.deck;
      if(!res.cancel) turnDamage +=dmg;
    })
    totalDamage += turnDamage;
  }
  // 平均打点
  console.log(totalDamage/loopNum);
  return totalDamage/loopNum;
}
