'use strict';

module.exports = { findDuplicates };

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function findDuplicates(nums) {
  const result = [];
  for (const n of nums) {
    const num = Math.abs(n);
    const index = num - 1;
    if (nums[index] < 0) {
      result.push(num);
    } else {
      nums[index] *= -1;
    }
  }
  return result;
}
