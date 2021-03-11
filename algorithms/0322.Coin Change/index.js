'use strict';

module.exports = { coinChange };

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
function coinChange(coins, amount) {
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 0; i <= amount; i++) {
    for (const c of coins) {
      const j = i + c;
      if (j > amount) {
        continue;
      }
      dp[j] = Math.min(dp[j], dp[i] + 1);
    }
  }
  const last = dp[amount];
  return last === Infinity ? -1 : last;
}
