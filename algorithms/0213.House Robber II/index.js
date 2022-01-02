'use strict';

module.exports = { rob };

/**
 * @param {number[]} nums
 * @return {number}
 */
function rob(nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  const dp = Array.from(nums, () => [0, 0]);
  for (let i = 1; i < nums.length; i++) {
    dp[i - 1][0] += nums[i - 1] + Math.max(get(i - 3, 0), get(i - 4, 0));
    dp[i][1] += nums[i] + Math.max(get(i - 2, 1), get(i - 3, 1));
  }
  return Math.max(...dp.slice(-3).flat());

  function get(i, j) {
    return i < 0 ? 0 : dp[i][j];
  }
}
