'use strict';

module.exports = { kthGrammar, kthGrammar2 };

/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
function kthGrammar(N, K) {
  const indexes = Array(N);
  let n0 = N;
  let k = K - 1;
  while (n0 > 0) {
    const d = k % 2;
    k = (k / 2) | 0;
    indexes[--n0] = { k, d };
  }
  let n = 0;
  for (let i = 1; i < indexes.length; i++) {
    const { d } = indexes[i];
    if (d === 0) {
      n = n === 0 ? 0 : 1;
    } else {
      n = n === 0 ? 1 : 0;
    }
  }
  return n;
}

/**
 * https://leetcode.com/contest/weekly-contest-70/ranking/ from uwi-san
 */
function kthGrammar2(N, K) {
  return bitCount(K - 1) % 2;
}

function bitCount(x) {
  x = ((x >> 1) & 0x55555555) + (x & 0x55555555);
  x = ((x >> 2) & 0x33333333) + (x & 0x33333333);
  x = ((x >> 4) & 0x0f0f0f0f) + (x & 0x0f0f0f0f);
  x = ((x >> 8) & 0x00ff00ff) + (x & 0x00ff00ff);
  return ((x >> 16) & 0x0000ffff) + (x & 0x0000ffff);
}
