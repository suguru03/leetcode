'use strict';

module.exports = { newInteger };

/**
 * @param {number} n
 * @return {number}
 */
function newInteger(n) {
  let str = '';
  while (n >= 9) {
    const d = n % 9;
    str = d + str;
    n = n / 9 | 0;
  }
  return +(n + str);
}
