'use strict';

module.exports = { isPowerOfTwo, isPowerOfTwo2, isPowerOfTwo3 };

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
 * @see https://leetcode.com/problems/power-of-two/discuss/63974/Using-nand(n-1)-trick
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfTwo2(n) {
  return n > 0 && (n & (n - 1)) === 0;
}

/**
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfTwo3(n) {
  return (Math.log10(n) / Math.log10(2)) % 1 === 0;
}
