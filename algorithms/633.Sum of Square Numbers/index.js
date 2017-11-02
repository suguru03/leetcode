'use strict';

module.exports = { judgeSquareSum };

/**
 * @param {number} c
 * @return {boolean}
 */
function judgeSquareSum(c) {
  let left = 0;
  let right = Math.sqrt(c) | 0;
  while (left <= right) {
    const num = left * left + right * right;
    if (num === c) {
      return true;
    }
    if (num < c) {
      left++;
    } else {
      right--;
    }
  }
  return false;
}
