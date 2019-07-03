'use strict';

module.exports = { reverseBits };

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
function reverseBits(n) {
  let result = new Uint32Array(1);
  let count = 32;
  while (count--) {
    result[0] <<= 1;
    result[0] |= n & 1;
    n >>= 1;
  }
  return result[0];
}
