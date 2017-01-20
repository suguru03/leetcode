'use strict';

module.exports = { reverseString };

/**
 * @param {string} s
 * @return {string}
 */
function reverseString(s) {
  let l = s.length;
  let result = '';
  while (l--) {
    result += s[l];
  }
  return result;
}
