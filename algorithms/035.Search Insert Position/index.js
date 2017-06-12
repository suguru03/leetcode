'use strict';

module.exports = { searchInsert };

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert(nums, target) {
  let i = -1;
  const l = nums.length;
  while (++i < l && nums[i] < target) {}
  return i;
}
