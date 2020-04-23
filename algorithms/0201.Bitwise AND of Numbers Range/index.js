'use strict';

module.exports = { rangeBitwiseAnd };

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
function rangeBitwiseAnd(m, n) {
  const bit = ~(m ^ n);
  let digit = 1 << (Math.log2(n) | 0);
  let result = 0;
  while (digit > 0 && (bit & digit) === digit) {
    result |= digit & n;
    digit >>= 1;
  }
  return result;
}
