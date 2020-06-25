'use strict';

module.exports = { numTrees };

/**
 * @param {number} n
 * @return {number}
 */
function numTrees(n) {
  const dp = [1, 1, ...Array(n - 1).fill(0)];
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i] += dp[j - 1] * dp[i - j];
    }
  }
  return dp[n];
}
