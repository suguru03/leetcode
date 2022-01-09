'use strict';

module.exports = { findMin };

/**
 *
 * @param {number[]} nums
 * @return {number}
 */
function findMin(nums) {
  let l = 0;
  let r = nums.length;
  while (l < r) {
    const m = (l + (r - l) / 2) | 0;
    if (nums[m] > nums[r]) {
      l = m + 1;
    } else if (nums[m] < nums[r]) {
      r = m;
    } else {
      r--;
    }
  }
  return nums[l];
}
