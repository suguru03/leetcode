'use strict';

module.exports = { maxProfit };

/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
function maxProfit(prices, fee) {
  prices.push(-Infinity);
  let min = Infinity;
  let max = -Infinity;
  let profit = 0;
  for (const p of prices) {
    if (max - p <= fee) {
      max = Math.max(max, p);
      min = Math.min(min, p);
      continue;
    }
    profit += Math.max(max - min - fee, 0);
    max = p;
    min = p;
  }
  return profit;
}
