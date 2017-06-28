'use strict';

module.exports = { maxProfit };

/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(n) {
  let min = Infinity;
  let max = 0;
  for (let i = 0; i < n.length; i++) {
    const num = n[i];
    const diff = num - min;
    if (diff > 0) {
      max = Math.max(max, diff);
    } else {
      min = num;
    }
  }
  return max;
}
