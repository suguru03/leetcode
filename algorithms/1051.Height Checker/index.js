'use strict';

module.exports = { heightChecker };

/**
 * @param {number[]} heights
 * @return {number}
 */
function heightChecker(heights) {
  const sorted = [...heights].sort((n1, n2) => n1 - n2);
  return heights.filter((n, i) => n === sorted[i]).length;
}
