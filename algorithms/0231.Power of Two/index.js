'use strict';

module.exports = { isPowerOfTwo, isPowerOfTwo2, isPowerOfTwo3, isPowerOfTwo4, isPowerOfTwo5 };

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

/**
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfTwo4(n) {
  return Math.log2(n) % 1 === 0;
}

/**
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfTwo5(n) {
  return n > 0 && bitCount(n) === 1;
}

function bitCount(x) {
  x = ((x >> 1) & 0x55555555) + (x & 0x55555555);
  x = ((x >> 2) & 0x33333333) + (x & 0x33333333);
  x = ((x >> 4) & 0x0f0f0f0f) + (x & 0x0f0f0f0f);
  x = ((x >> 8) & 0x00ff00ff) + (x & 0x00ff00ff);
  return ((x >> 16) & 0x0000ffff) + (x & 0x0000ffff);
}
