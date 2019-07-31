'use strict';

module.exports = { reverseBits, reverseBits2 };

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
function reverseBits(n) {
  const res = new Uint32Array(1);
  let count = 32;
  while (count--) {
    res[0] <<= 1;
    res[0] |= n & 1;
    n >>= 1;
  }
  return res[0];
}

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
function reverseBits2(n) {
  let res = 0n;
  let count = 32;
  while (count--) {
    res *= 2n;
    res += n & 1 ? 1n : 0n;
    n >>= 1;
  }
  return +res.toString();
}
