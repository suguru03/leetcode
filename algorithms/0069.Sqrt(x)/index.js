'use strict';

module.exports = { mySqrt, mySqrt2 };

/**
 * @param {number} x
 * @return {number}
 */
function mySqrt(x) {
  if (x <= 0) {
    return x;
  }
  let prev = 0;
  let result = 1;
  while (prev !== result) {
    prev = result;
    result = (result + x / result) / 2;
  }
  return Math.floor(result);
}

/**
 * @param {number} x
 * @return {number}
 */
function mySqrt2(x) {
  let left = 0;
  let right = x;
  while (left <= right) {
    const num = ((left + right) / 2) | 0;
    const res = x / num;
    if (res === num) {
      return num;
    }
    if (res < num) {
      right = num - 1;
    } else {
      left = num + 1;
    }
  }
  return ((left + right) / 2) | 0;
}
