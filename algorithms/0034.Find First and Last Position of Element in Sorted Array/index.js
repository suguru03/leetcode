'use strict';

module.exports = { searchRange, searchRange2 };

/**
 * @see https://leetcode.com/explore/learn/card/binary-search/135/template-iii/936/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function searchRange(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const mid = ((left + right) / 2) | 0;
    if (nums[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  const end = nums[left] === target ? left : left - 1;
  if (nums[end] !== target) {
    return [-1, -1];
  }
  while (--left >= 0) {
    if (nums[left] !== target) {
      break;
    }
  }
  return [left + 1, end];
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function searchRange2(nums, target) {
  // find the first target
  let left = 0;
  let right = nums.length - 1;
  while (left + 1 < right) {
    const mid = ((left + right) / 2) | 0;
    if (nums[mid] < target) {
      left = mid;
    } else {
      right = mid;
    }
  }
  const start = nums[left] === target ? left : nums[right] === target ? right : -1;

  // find the last target
  left = 0;
  right = nums.length - 1;
  while (left + 1 < right) {
    const mid = ((left + right) / 2) | 0;
    if (nums[mid] <= target) {
      left = mid;
    } else {
      right = mid;
    }
  }
  const end = nums[right] === target ? right : nums[left] === target ? left : -1;
  return [start, end];
}
