'use strict';

const _ = require('lodash');

module.exports = { searchInsert, searchInsert2 };

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert(nums, target) {
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    const i = ((l + r) / 2) | 0;
    const n = nums[i];
    if (n === target) {
      return i;
    }
    if (n > target) {
      r = i - 1;
    } else {
      l = i + 1;
    }
  }
  return l;
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert2(nums, target) {
  return _.sortedIndex(nums, target);
}
