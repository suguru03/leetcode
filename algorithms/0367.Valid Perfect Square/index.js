'use strict';

module.exports = { isPerfectSquare, isPerfectSquare2 };

/**
 * @param {number} num
 * @return {boolean}
 */
function isPerfectSquare(num) {
  let l = 0;
  let r = num;
  while (l < r) {
    const m = (l + (r - l) / 2) | 0;
    if (m ** 2 < num) {
      l = m + 1;
    } else {
      r = m;
    }
  }
  return l ** 2 === num;
}

/**
 * @param {number} num
 * @return {boolean}
 */
function isPerfectSquare2(num) {
  let x = num;
  while (x * x > num) {
    x = (x + num / x) >> 1;
  }
  return x * x === num;
}
