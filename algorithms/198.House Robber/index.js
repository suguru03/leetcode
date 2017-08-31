'use strict';

module.exports = { rob };

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
