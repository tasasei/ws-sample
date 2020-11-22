'use strict';

const ws = require('./wsdeck.js');
const LOOP = 10000;

/**
// 4枚集中を1回打った時のHit数（率）が知りたい
let total = 0;
for(let i=1; i<LOOP; i++){
  // デッキの内容を設定(CXを含む山札枚数,CX)
  let deck = ws.createDeck(24,6);
  // めくる(さっき作ったデッキ,めくる枚数)
  deck = ws.concentration(deck,4);
  total += deck.hit;
};
console.log(total/LOOP);

// 指定のダメージを与えたときの平均打点が知りたい

  let totalDamage = 0;
  for (let i=0; i<LOOP; i++){
    let turnDamage = 0;
    let deck = ws.createDeck(10,3);
    // 与えたい打点[2点,2点,2点]
    const DMG_ARRAY = [2,2,2];
    DMG_ARRAY.forEach( dmg => {
      const res = ws.cancelOrNot(deck,dmg);
      deck = res.deck;
      if(!res.cancel) turnDamage +=dmg;
    })
    totalDamage += turnDamage;
  }
  console.log(totalDamage/LOOP);
*/
