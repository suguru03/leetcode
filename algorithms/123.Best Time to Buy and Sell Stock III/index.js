'use strict';

module.exports = { maxProfit };

/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  const n = prices.length;
  const dp = Array(n);
  let max = 0;
  for (let i = 0; i < 4; i++) {
    const alpha = i % 2 ? 1 : -1;
    let cur = -Infinity;
    let prev = dp[i] || 0;
    for (let j = i; j < n; j++) {
      let p = prev + prices[j] * alpha;
      prev = dp[j] || 0;
      cur = dp[j] = Math.max(cur, p);
    }
    max = Math.max(max, dp[n - 1] || 0);
  }
  return max;
}
