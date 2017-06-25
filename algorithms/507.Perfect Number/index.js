'use strict';

module.exports = { checkPerfectNumber };

/**
 * @param {number} num
 * @return {boolean}
 */
function checkPerfectNumber(num) {
  if (num <= 1) {
    return false;
  }
  let n = num;
  while (n % 2 === 0) {
    n /= 2;
  }
  return num === n * ((n + 1) / 2);
}
