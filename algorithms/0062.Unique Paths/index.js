'use strict';

module.exports = { uniquePaths };

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
function uniquePaths(m, n) {
  const dp = Array(n).fill(1);
  while (--m > 0) {
    for (let i = 1; i < n; i++) {
      dp[i] += dp[i - 1];
    }
  }
  return dp[n - 1];
}
