'use strict';

module.exports = { search };

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
  let l = 0;
  let r = nums.length;
  while (l < r) {
    const m = (l + (r - l) / 2) | 0;
    const n = nums[m];
    if (n === target) {
      return m;
    }
    if (n < target) {
      l = m + 1;
    } else {
      r = m;
    }
  }
  return -1;
}
