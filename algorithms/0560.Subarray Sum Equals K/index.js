'use strict';

module.exports = { subarraySum };

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function subarraySum(nums, k) {
  const l = nums.length;
  const dp = [...nums];
  let count = dp.filter(n => n === k).length;
  for (let i = 1; i < l; i++) {
    for (let j = l - 1; j >= i; j--) {
      dp[j] = dp[j - 1] + nums[j];
      if (dp[j] === k) {
        count++;
      }
    }
  }
  return count;
}
