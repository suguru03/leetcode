'use strict';

module.exports = { findNthDigit };

/**
 * @param {number} n
 * @return {number}
 */
function findNthDigit(n) {
  let sum = 1;
  let digit = 0;
  while (true) {
    const num = 9 * Math.pow(10, digit++) * digit + sum;
    if (n < num) {
      break;
    }
    sum = num;
  }
  n -= sum;
  const pos = n % digit;
  sum = Math.pow(10, digit - 1) + (n - pos) / digit;
  sum += '';
  return +sum[pos];
}
