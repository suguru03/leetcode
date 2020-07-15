'use strict';

module.exports = { kWeakestRows };

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
function kWeakestRows(mat, k) {
  return mat
    .map((row, index) => [index, row.filter(n => n === 1).length])
    .sort(([i1, c1], [i2, c2]) => c1 - c2 || i1 - i2)
    .map(([index]) => index)
    .slice(0, k);
}
