'use strict';

module.exports = { numSquares };

/**
 * @param {number} n
 * @return {number}
 */
function numSquares(n) {
  const dp = Array(n + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= n; i++) {
    let j = 0;
    while (i - (++j) ** 2 >= 0) {
      dp[i] = Math.min(dp[i], dp[i - j ** 2] + 1);
    }
  }
  return dp[n];
}
