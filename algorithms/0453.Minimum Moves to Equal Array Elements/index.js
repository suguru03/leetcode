'use strict';

module.exports = { minMoves };

/**
 * @param {number[]} nums
 * @return {number}
 */
function minMoves(nums) {
  const min = Math.min(...nums);
  return nums.reduce((sum, n) => sum + n - min, 0);
}
