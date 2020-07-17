'use strict';

module.exports = { myPow };

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
function myPow(x, n) {
  const plus = n >= 0;
  n = Math.abs(n);
  let result = 1;
  while (n > 0) {
    if ((n & 1) === 1) {
      result *= x;
    }
    x *= x;
    n = Math.floor(n / 2);
  }
  return plus ? result : 1 / result;
}
