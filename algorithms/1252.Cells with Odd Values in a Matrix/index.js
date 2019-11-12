'use strict';

module.exports = { oddCells };

/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
function oddCells(n, m, indices) {
  const row = Array(n).fill(0);
  const column = Array(m).fill(0);
  for (const [r, c] of indices) {
    row[r] ^= 1;
    column[c] ^= 1;
  }
  let result = 0;
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < m; c++) {
      result += row[r] ^ column[c];
    }
  }
  return result;
}
