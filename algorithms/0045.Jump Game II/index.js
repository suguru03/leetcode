'use strict';

module.exports = { jump };

/**
 * @param {number[]} nums
 * @return {number}
 */
function jump(nums) {
  const last = nums.length - 1;
  const dp = Array.from(nums).fill(Infinity);
  dp[0] = 0;
  for (let i = 0; i < last; i++) {
    const n = nums[i];
    const l = Math.min(i + n, last);
    for (let j = i + 1; j <= l; j++) {
      dp[j] = Math.min(dp[j], dp[i] + 1);
    }
  }
  return dp[last];
}
