'use strict';

module.exports = { trailingZeroes, trailingZeroes2 };

/**
 * @param {number} n
 * @return {number}
 */
function trailingZeroes(n) {
  let result = 0;
  while (n > 0) {
    n = n / 5 | 0;
    result += n;
  }
  return result;
}

/**
 * @param {number} n
 * @return {number}
 */
function trailingZeroes2(n) {
  n = n / 5 | 0;
  return n === 0 ? 0 : n + trailingZeroes2(n);
}
