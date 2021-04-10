'use strict';

module.exports = { isAlienSorted };

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
function isAlienSorted(words, order) {
  const orderMap = new Map(Array.from(order, (char, i) => [char, String.fromCharCode(i + 97)]));
  return words
    .map((word) => ({
      word,
      order: word
        .split('')
        .map((char) => orderMap.get(char))
        .join(''),
    }))
    .sort((o1, o2) => o1.order.localeCompare(o2.order))
    .every(({ word }, i) => word === words[i]);
}
