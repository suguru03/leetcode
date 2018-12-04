'use strict';

module.exports = { deckRevealedIncreasing };

/**
 * @param {number[]} deck
 * @return {number[]}
 */
function deckRevealedIncreasing(deck) {
  const size = deck.length;
  const idx = Array(size);
  for (let i = 0; i < size; i++) {
    idx[i] = i;
  }
  const ans = Array(size);
  deck.sort((n1, n2) => n1 - n2);
  for (let i = 0; i < size; i++) {
    ans[idx.shift()] = deck[i];
    idx.push(idx.shift());
  }
  return ans;
}
