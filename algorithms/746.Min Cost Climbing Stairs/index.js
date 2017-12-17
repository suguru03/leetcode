'use strict';

module.exports = { minCostClimbingStairs };

/**
 * @param {number[]} cost
 * @return {number}
 */
function minCostClimbingStairs(cost) {
  const l = cost.length;
  const dp = Array(l);
  dp[0] = cost[0];
  dp[1] = cost[1];
  for (let i = 2; i < l; i++) {
    dp[i] = Math.min(dp[i - 2], dp[i - 1]) + cost[i];
  }
  return Math.min(dp[l - 2], dp[l - 1]);
}
