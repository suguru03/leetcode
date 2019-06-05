'use strict';

module.exports = { maxEqualRowsAfterFlips };

/**
 * @param {number[][]} matrix
 * @return {number}
 */
function maxEqualRowsAfterFlips(matrix) {
  let obj = {};
  for (let r of matrix) {
    const p = r.reduce((s, n) => s + (n ^ r[0]), '');
    obj[p] = ++obj[p] || 1;
  }
  return Math.max(...Object.values(obj));
}
