'use strict';

module.exports = { distributeCandies };

/**
 * @param {number} candies
 * @param {number} n
 * @return {number[]}
 */
function distributeCandies(candies, n) {
  const result = Array(n).fill(0);
  let i = 0;
  while (candies > 0) {
    result[i++ % n] += Math.min(candies, i);
    candies -= i;
  }
  return result;
}
