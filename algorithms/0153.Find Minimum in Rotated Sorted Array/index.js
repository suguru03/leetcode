'use strict';

module.exports = { findMin };

/**
 * @param {number[]} nums
 * @return {number}
 */
function findMin(nums) {
  let left = 0;
  let right = nums.length;
  const last = nums[right - 1];
  while (left < right) {
    const mid = ((left + right) / 2) | 0;
    if (nums[mid] > last) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return nums[left];
}
