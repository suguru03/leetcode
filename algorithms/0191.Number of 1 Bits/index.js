'use strict';

module.exports = { hammingWeight };

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
function hammingWeight(n) {
  let count = 0;
  while (n > 0) {
    n & 1 && count++;
    n >>>= 1;
  }
  return count;
}
