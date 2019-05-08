'use strict';

module.exports = { lengthOfLIS };

/**
 * @param {number[]} nums
 * @return {number}
 */
function lengthOfLIS(nums) {
  const l = nums.length;
  if (l === 0) {
    return 0;
  }
  const dp = Array(l).fill(1);
  for (let i = 0; i < l - 1; i++) {
    const n1 = nums[i];
    for (let j = i + 1; j < l; j++) {
      const n2 = nums[j];
      if (n1 >= n2) {
        continue;
      }
      dp[j] = Math.max(dp[j], dp[i] + 1);
    }
  }
  return Math.max(...dp);
}
