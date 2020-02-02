'use strict';

module.exports = { maximum69Number };

/**
 * @param {number} num
 * @return {number}
 */
function maximum69Number(num) {
  let digits = Math.pow(10, Math.log10(num) | 0);
  while (digits > 0) {
    const n = (num / digits) % 10 | 0;
    if (n === 6) {
      return num + digits * 3;
    }
    digits /= 10;
  }
  return num;
}
