'use strict';

module.exports = { searchInsert1, searchInsert2 };

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert1(nums, target) {
  let i = 0;
  let left = 0;
  let right = nums.length - 1;
  while (right >= left) {
    i = (left + right) / 2 | 0;
    const n = nums[i];
    if (target === n) {
      return i;
    }
    if (target < n) {
      right = i - 1;
    } else {
      left = i + 1;
    }
  }
  return left > right ? left : i;
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert2(nums, target) {
  let i = -1;
  const l = nums.length;
  while (++i < l && nums[i] < target) {}
  return i;
}
