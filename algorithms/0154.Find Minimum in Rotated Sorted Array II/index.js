'use strict';

module.exports = { findMin };

/**
 * @param {number[]} nums
 * @return {number}
 */
function findMin(nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const mid = (right + (left - right) / 2) | 0;
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else if (nums[mid] < nums[left]) {
      right = mid;
      left++;
    } else {
      right--;
    }
  }
  return nums[left];
}
