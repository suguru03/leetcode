'use strict';

module.exports = { maxProfit, maxProfit2, maxProfit3 };

/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    profit += Math.max(0, prices[i] - prices[i - 1]);
  }
  return profit;
}

/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit2(prices) {
  return prices.reduce((profit, price, i) => profit + Math.max(0, price - prices[i - 1] || 0), 0);
}

/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit3(prices) {
  let min;
  let max;
  let profit = 0;
  let i = 0;
  while (i < prices.length) {
    min = Infinity;
    max = -Infinity;
    while (prices[i] < min) {
      min = prices[i++];
    }
    while (prices[i] > max) {
      max = prices[i++];
    }
    profit += Math.max(0, max - min);
  }
  return profit;
}
