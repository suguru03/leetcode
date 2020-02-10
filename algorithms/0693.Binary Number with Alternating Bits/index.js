'use strict';

module.exports = { hasAlternatingBits, hasAlternatingBits2 };

/**
 * @param {number} n
 * @return {boolean}
 */
function hasAlternatingBits(n) {
  return (n ^ (n >> 1)) === 2 ** (Math.floor(Math.log2(n)) + 1) - 1;
}

/**
 * @see https://leetcode.com/problems/binary-number-with-alternating-bits/discuss/113933/Java-super-simple-explanation-with-inline-example
 * @param {number} n
 * @return {boolean}
 */
function hasAlternatingBits(n) {
  n = n ^ (n >> 1);
  return (n & (n + 1)) === 0;
}
