"use strict";

module.exports = {
  /**
   * デッキを作成します。
   * @param {number} nDeck 山札枚数
   * @param {number} cx クライマックス枚数
   * @return {Array.<number>} deck
   */
  createDeck: function (nDeck, cx) {
    const deck = new Array(nDeck);
    for (let i = 0; i < nDeck; i++) {
      deck[i] = 0;
    }

    for (let i = 0; i < cx; i++) {
      const ran = Math.floor(Math.random() * (nDeck - i));
      for (let j = 0, pos = 0; j < nDeck; j++) {
        if (!deck[j]) {
          if (ran == pos) deck[j] = 1;
          pos++;
        }
      }
    }
    return deck;
  },

  /**
   * 山札をめくりキャンセルするかどうかを確認します。
   * @param {Array.<number>} deck デッキ
   * @param {number} damage 打点
   * @return {{deck: Array.<number>, cancel: boolean}} {deck:deck, cancel:true/false}
   */
  cancelOrNot: function (deck, damage) {
    let d = deck;
    for (let dec_i = 0; dec_i < damage; dec_i++) {
      if (d[0]) {
        d.shift();
        return { deck: d, cancel: true };
      } else {
        d.shift();
      }
    }
    return { deck: d, cancel: false };
  },

  /**
   * 山札を規定枚数めくります。
   * @param {*} deck デッキ
   * @param {*} num 枚数
   * @return {*} {deck:deck, hit:hit数}
   */
  concentration: function (deck, num) {
    let d = deck;
    let h = 0;
    for (let dec_i = 0; dec_i < num; dec_i++) {
      if (d[0]) h++;
      d.shift();
    }
    return { deck: d, hit: h };
  },
};
