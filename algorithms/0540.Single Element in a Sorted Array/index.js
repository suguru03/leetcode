'use strict';

module.exports = { singleNonDuplicate };

/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNonDuplicate(nums) {
  let left = 0;
  let right = nums.length;
  while (left < right) {
    const mid = (left + (right - left) / 2) | 0;
    if ((mid % 2 === 1) === (nums[mid] === nums[mid + 1])) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return nums[left];
}
