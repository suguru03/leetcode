'use strict';

module.exports = { myAtoi };

/**
 * @param {string} s
 * @return {number}
 */
function myAtoi(s) {
  s = s.trimLeft();
  let i = 0;
  const sign = /^[-+]/.test(s) && s[i++] === '-' ? -1 : 1;
  const max = 2 ** 31 - Number(sign === 1);
  let result = 0;
  for (const c of s.slice(i)) {
    if (/^(?!\d)/.test(c)) {
      break;
    }
    result = Math.min(result * 10 + Number(c), max);
  }
  return sign * result;
}
