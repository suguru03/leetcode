'use strict';

module.exports = { search };

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
  let left = 0;
  let right = nums.length;
  while (left < right) {
    const mid = ((right - left) / 2 + left) | 0;
    const val = nums[mid];
    if (val === target) {
      return mid;
    }
    if (val > target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}
