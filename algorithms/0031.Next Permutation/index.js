'use strict';

const _ = require('lodash');

module.exports = { nextPermutation };

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums) {
  let left = _.findLastIndex(nums, (num, index) => num > nums[index - 1]);
  if (left < 0) {
    nums.reverse();
    return;
  }
  swap(
    left - 1,
    _.findLastIndex(nums, (num) => num > nums[left - 1]),
  );

  let right = nums.length;
  while (left < right) {
    swap(left++, --right);
  }

  function swap(i, j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
}
