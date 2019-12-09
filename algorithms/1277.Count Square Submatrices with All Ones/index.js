'use strict';

module.exports = { countSquares };

/**
 * @param {number[][]} matrix
 * @return {number}
 */
function countSquares(matrix) {
  let count = 0;
  for (const [y, row] of matrix.entries()) {
    for (const [x, val] of row.entries()) {
      if (val === 0) {
        continue;
      }
      if (x > 0 && y > 0) {
        row[x] += Math.min(matrix[y - 1][x - 1], matrix[y - 1][x], matrix[y][x - 1]);
      }
      count += row[x];
    }
  }
  return count;
}
