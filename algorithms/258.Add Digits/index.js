'use strict';

module.exports = { addDigits, addDigits2 };

/**
 * @param {number} num
 * @return {number}
 */
function addDigits(num) {
  let result = 0;
  while (num > 0) {
    const n = num % 10;
    const t = n + result;
    if (t >= 10) {
      result = t % 10 + 1;
    } else {
      result = t;
    }
    num = num / 10 | 0;
  }
  return result;
}

/**
 * @param {number} num
 * @return {number}
 */
function addDigits2(num) {
  return 1 + (num - 1) % 9;
}
