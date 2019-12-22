'use strict';

module.exports = { maxProfit, maxProfit2 };

/**
 * Bottom up
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let min = Infinity;
  let max = 0;
  for (const price of prices) {
    max = Math.max(max, price - min);
    min = Math.min(min, price);
  }
  return max;
}

/**
 * Top down
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit2(prices) {
  let min = Infinity;
  return max(prices.length - 1);
  function max(i) {
    if (i < 0) {
      return 0;
    }
    const price = prices[i];
    const profit = Math.max(max(i  - 1), price - min);
    min = Math.min(min, price);
    return profit;
  }
}
