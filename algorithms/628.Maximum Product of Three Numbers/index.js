'use strict';

module.exports = { maximumProduct };

/**
 * @param {number[]} nums
 * @return {number}
 */
function maximumProduct(nums) {
  const l = nums.length;
  if (l < 3) {
    return 0;
  }
  nums.sort((n1, n2) => n1 < n2 ? -1 : 1);
  const max = nums[l - 1];
  const r1 = max * nums[l - 2] * nums[l - 3];
  const r2 = max * nums[0] * nums[1];
  return Math.max(r1, r2);
}
