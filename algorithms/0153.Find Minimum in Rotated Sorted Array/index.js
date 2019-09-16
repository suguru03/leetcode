'use strict';

module.exports = { findMin };

/**
 * @param {number[]} nums
 * @return {number}
 */
function findMin(nums) {
  let left = 0;
  let right = nums.length - 1;
  const last = nums[right];
  while (left < right) {
    const mid = ((left + right) / 2) | 0;
    if (nums[mid] < last) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return nums[right];
}
