'use strict';

module.exports = { hammingDistance, hammingDistance2 };

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
function hammingDistance(x, y) {
  let sx = x.toString(2);
  let sy = y.toString(2);
  let l = Math.max(sx.length, sy.length);
  sx = sx.padStart(l, '0');
  sy = sy.padStart(l, '0');
  let count = 0;
  while (--l >= 0) {
    if (sx[l] !== sy[l]) {
      count++;
    }
  }
  return count;
}

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
function hammingDistance2(x, y) {
  let n = x ^ y;
  let count = 0;
  while (n > 0) {
    (n & 1) === 1 && count++;
    n >>= 1;
  }
  return count;
}
