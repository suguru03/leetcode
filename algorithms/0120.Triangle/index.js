'use strict';

module.exports = { minimumTotal };

/**
 * @param {number[][]} triangle
 * @return {number}
 */
function minimumTotal(triangle) {
  for (let i = 1; i < triangle.length; i++) {
    const prev = triangle[i - 1];
    const row = triangle[i];
    for (let j = 0; j < row.length; j++) {
      row[j] += Math.min(prev[j] ?? Infinity, prev[j - 1] ?? Infinity);
    }
  }
  return Math.min(...triangle[triangle.length - 1]);
}
