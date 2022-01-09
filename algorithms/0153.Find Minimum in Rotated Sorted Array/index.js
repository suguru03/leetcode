'use strict';

module.exports = { findMin };

/**
 * @param {number[]} nums
 * @return {number}
 */
function findMin(nums) {
  let l = 0;
  let r = nums.length;
  const last = nums[r - 1];
  while (l < r) {
    const m = (l + (r - l) / 2) | 0;
    if (nums[m] > last) {
      l = m + 1;
    } else {
      r = m;
    }
  }
  return nums[l];
}
