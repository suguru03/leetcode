'use strict';

module.exports = { findPeakElement };

/**
 * @param {number[]} nums
 * @return {number}
 */
function findPeakElement(nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const mid = ((left + right) / 2) | 0;
    if (nums[mid] > nums[mid + 1]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return right;
}
