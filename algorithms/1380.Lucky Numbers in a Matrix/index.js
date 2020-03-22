'use strict';

module.exports = { luckyNumbers };

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
function luckyNumbers(matrix) {
  const rows = [];
  const columns = [];
  for (const [y, row] of matrix.entries()) {
    for (const [x, num] of row.entries()) {
      rows[y] = Math.min(num, rows[y] || Infinity);
      columns[x] = Math.max(num, columns[x] || 0);
    }
  }
  const result = [];
  for (const [y, row] of matrix.entries()) {
    for (const [x, num] of row.entries()) {
      if (rows[y] === columns[x]) {
        result.push(num);
      }
    }
  }
  return result;
}
