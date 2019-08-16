'use strict';

module.exports = { isUgly };

/**
 * @param {number} num
 * @return {boolean}
 */
function isUgly(num) {
  if (num <= 0) {
    return false;
  }
  const factors = [2, 3, 5];
  let l = factors.length;
  while (l--) {
    const f = factors[l];
    while (num % f === 0) {
      num /= f;
    }
  }
  return num === 1;
}
