'use strict';

module.exports = { change };

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
function change(amount, coins) {
  if (amount === 0) {
    return 1;
  }
  const dp = Array(amount + 1).fill(0);
  for (const coin of coins) {
    dp[coin]++;
    for (let sum = coin; sum <= amount; sum++) {
      dp[sum] += dp[sum - coin];
    }
  }
  return dp[amount];
}
