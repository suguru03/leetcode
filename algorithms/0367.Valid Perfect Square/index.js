'use strict';

module.exports = { isPerfectSquare, isPerfectSquare2 };

/**
 * @param {number} num
 * @return {boolean}
 */
function isPerfectSquare(num) {
  let left = 1;
  let right = num;
  while (left <= right) {
    const mid = left + (((right - left) / 2) | 0);
    const target = mid ** 2;
    if (target === num) {
      return true;
    }
    if (target > num) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
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
