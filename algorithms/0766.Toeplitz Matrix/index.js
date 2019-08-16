'use strict';

module.exports = { isToeplitzMatrix, isToeplitzMatrix2 };

/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
function isToeplitzMatrix(matrix) {
  const l = matrix.length;
  for (let [i, row] of matrix.entries()) {
    let j = -1;
    let prev = -1;
    while (++j < row.length) {
      const n = matrix[i][j];
      if (prev === -1) {
        prev = n;
      } else if (n !== prev) {
        return false;
      }
      i = ++i % l;
      if (i === 0) {
        prev = -1;
      }
    }
  }
  return true;
}

/**
 * @see https://leetcode.com/problems/toeplitz-matrix/discuss/113417/Java-solution-4-liner.
 * @param {number[][]} matrix
 * @return {boolean}
 */
function isToeplitzMatrix2(matrix) {
  for (let i = 0; i < matrix.length - 1; i++) {
    for (let j = 0; j < matrix[i].length - 1; j++) {
      if (matrix[i][j] !== matrix[i + 1][j + 1]) {
        return false;
      }
    }
  }

  return true;
}
