'use strict';

module.exports = { findDuplicate };

/**
 * @param {number[]} nums
 * @return {number}
 */
function findDuplicate(nums) {
  for (const val of nums) {
    const num = Math.abs(val);
    if (nums[num - 1] < 0) {
      return num;
    }
    nums[num - 1] *= -1;
  }
}
