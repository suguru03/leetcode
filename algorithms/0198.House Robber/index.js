'use strict';

module.exports = { rob, rob2, rob3 };

/**
 * @param {number[]} nums
 * @return {number}
 */
function rob(nums) {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    nums[i] += Math.max(nums[i - 2] || 0, nums[i - 3] || 0);
    max = Math.max(max, nums[i]);
  }
  return max;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function rob2(nums) {
  let l = nums.length - 1;
  while (--l >= 0) {
    nums[l] += Math.max(nums[l + 2] || 0, nums[l + 3] || 0);
  }
  return Math.max(nums[0] || 0, nums[1] || 0);
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function rob3(nums) {
  let prev = 0;
  let curr = 0;
  for (const n of nums) {
    [prev, curr] = [curr, Math.max(prev + n, curr)];
  }
  return curr;
}
