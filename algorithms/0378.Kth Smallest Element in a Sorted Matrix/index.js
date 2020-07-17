'use strict';

module.exports = { kthSmallest };

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
function kthSmallest(matrix, k) {
  let n = matrix.length;
  let left = matrix[0][0];
  let right = matrix[n - 1][n - 1];
  while (left < right) {
    const mid = (left + (right - left) / 2) | 0;
    let count = 0;
    let x = n - 1;
    for (let y = 0; y < n; y++) {
      while (x >= 0 && matrix[y][x] > mid) {
        x--;
      }
      if (x < 0) {
        break;
      }
      count += x + 1;
    }
    if (count >= k) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}
