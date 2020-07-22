'use strict';

module.exports = { numWaterBottles };

/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
function numWaterBottles(numBottles, numExchange) {
  let ans = numBottles;
  while (numBottles >= numExchange) {
    const rem = numBottles % numExchange;
    numBottles = Math.floor(numBottles / numExchange);
    ans += numBottles;
    numBottles += rem;
  }
  return ans;
}
