'use strict';

module.exports = { findPeakElement };

/**
 * @param {number[]} nums
 * @return {number}
 */
function findPeakElement(nums) {
  let l = 0;
  let r = nums.length;
  while (l < r) {
    const m = (l + (r - l) / 2) | 0;
    if (nums[m] <= nums[m + 1]) {
      l = m + 1;
    } else {
      r = m;
    }
  }
  return l;
}
