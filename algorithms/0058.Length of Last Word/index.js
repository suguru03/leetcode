'use strict';

module.exports = { lengthOfLastWord, lengthOfLastWord2 };

/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLastWord(s) {
  const parts = s.split(' ');
  while (parts.length) {
    const s = parts.pop();
    const l = s.length;
    if (l) {
      return l;
    }
  }
  return 0;
}

/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLastWord2(s) {
  s = s.trimRight();
  let l = s.length;
  let result = 0;
  while (l--) {
    const c = s[l];
    if (c === ' ') {
      break;
    }
    result++;
  }
  return result;
}
