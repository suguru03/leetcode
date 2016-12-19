'use strict';

module.exports = reverse;

const MAX = 2147483647;
const MIN = -2147483648;

/**
 * @param {number} x
 * @return {number}
 */
function reverse(x) {
  const x0 = Math.abs(x);
  const xs = x0 + '';
  let l = xs.length;
  let result = 0;
  while (l--) {
    result += +xs[l] * Math.pow(10, l);
  }
  if (x < 0) {
    result *= -1;
  }
  if (result > MAX || result < MIN) {
    return 0;
  }
  return result;
}
