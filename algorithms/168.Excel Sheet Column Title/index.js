'use strict';

module.exports = { convertToTitle };

/**
 * @param {number} n
 * @return {string}
 */
function convertToTitle(n) {
  let str = '';
  // 1
  while (n > 0) {
    const charCode = n % 26 || 26;
    str = String.fromCharCode(64 + charCode) + str;
    n -= charCode;
    n /= 26;
  }
  return str;
}
