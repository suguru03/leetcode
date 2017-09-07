'use strict';

module.exports = { isPowerOfTwo, isPowerOfTwo2 };

/**
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfTwo(n) {
  while (n > 1) {
    if (n & 1) {
      return false;
    }
    n >>= 1;
  }
  return n === 1;
}

/**
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfTwo2(n) {
  return n > 0 && (n & n - 1) === 0;
}
