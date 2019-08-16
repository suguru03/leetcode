'use strict';

module.exports = { isPerfectSquare };

/**
 * @param {number} num
 * @return {boolean}
 */
function isPerfectSquare(num) {
  let x = num;
  while (x * x > num) {
    x = (x + num / x) >> 1;
  }
  return x * x === num;
}
