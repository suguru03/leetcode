'use strict';

module.exports = { maximalSquare };

/**
 * @param {character[][]} matrix
 * @return {number}
 */
function maximalSquare(matrix) {
  let max = 0;
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      matrix[y][x] &= 1;
      if (x === 0 || y === 0 || matrix[y][x] === 0) {
        max = Math.max(max, matrix[y][x]);
        continue;
      }
      matrix[y][x] = Math.min(matrix[y - 1][x], matrix[y][x - 1], matrix[y - 1][x - 1]) + 1;
      max = Math.max(max, matrix[y][x] ** 2);
    }
  }
  return max;
}
