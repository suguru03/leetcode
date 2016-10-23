'use strict';

module.exports = twoSum;

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  let l = nums.length;
  const hash = [];
  while (l--) {
    const n = nums[l];
    const diff = target - n;
    const i = hash[diff];
    if (i !== undefined) {
      return [l, i];
    }
    hash[n] = l;
  }
}
