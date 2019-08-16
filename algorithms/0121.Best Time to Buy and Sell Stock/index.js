'use strict';

module.exports = { maxProfit };

/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let min = Infinity;
  let max = 0;
  for (const p of prices) {
    if (p < min) {
      min = p;
    } else {
      max = Math.max(max, p - min);
    }
  }
  return max;
}
