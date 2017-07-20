'use strict';

module.exports = { maxProfit };

/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let sum = 0;
  let prev = prices[0];
  for (let i = 1; i < prices.length; i++) {
    const n = prices[i];
    if (prev < n) {
      sum += (n - prev);
    }
    prev = n;
  }
  return sum;
}
