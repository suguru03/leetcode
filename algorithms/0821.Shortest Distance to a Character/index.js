'use strict';

module.exports = { shortestToChar };

/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
function shortestToChar(S, C) {
  const chars = S.split('');
  const indices = [];
  for (const [i, c] of chars.entries()) {
    if (c === C) {
      indices.push(i);
    }
  }
  let left = 0;
  return chars.map((c, i) => {
    const d1 = Math.abs(indices[left] - i);
    const d2 = left !== indices.length - 1 ? Math.abs(indices[left + 1] - i) : Infinity;
    if (d2 < d1) {
      left++;
    }
    return Math.min(d1, d2);
  });
}
