'use strict';

const _ = require('lodash');

module.exports = { searchInsert, searchInsert2 };

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert(nums, target) {
  let left = 0;
  let right = nums.length;
  while (left < right) {
    const mid = ((right - left) / 2 + left) | 0;
    const num = nums[mid];
    if (num === target) {
      return mid;
    }
    if (num < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert2(nums, target) {
  return _.sortedIndex(nums, target);
}
