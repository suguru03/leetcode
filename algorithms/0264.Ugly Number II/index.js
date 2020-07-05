'use strict';

module.exports = { nthUglyNumber };

/**
 * @param {number} n
 * @return {number}
 */
function nthUglyNumber(n) {
  if (n <= 1) {
    return n === 1;
  }
  const dp = Array(n);
  let t2 = 0;
  let t3 = 0;
  let t5 = 0;
  dp[0] = 1;
  for (let i = 1; i < n; i++) {
    dp[i] = Math.min(dp[t2] * 2, dp[t3] * 3, dp[t5] * 5);
    if (dp[i] === dp[t2] * 2) {
      t2++;
    }
    if (dp[i] === dp[t3] * 3) {
      t3++;
    }
    if (dp[i] === dp[t5] * 5) {
      t5++;
    }
  }
  return dp[n - 1];
}
