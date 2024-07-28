'use strict';

module.exports = { findLengthOfLCIS };

/**
 * @param {number[]} nums
 * @return {number}
 */
function findLengthOfLCIS(nums) {
  let max = 1;
  let left = 0;
  for (let right = 1; right < nums.length; right++) {
    if (nums[right] <= nums[right - 1]) {
      left = right;
      continue;
    }
    max = Math.max(max, right - left + 1);
  }
  return max;
}
