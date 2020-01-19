'use strict';

module.exports = { minFlips };

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
function minFlips(a, b, c) {
  let count = 0;
  while (a || b || c) {
    count += c & 1 ? ((a | b) & 1) ^ 1 : (a & 1) + (b & 1);
    a >>= 1;
    b >>= 1;
    c >>= 1;
  }
  return count;
}
