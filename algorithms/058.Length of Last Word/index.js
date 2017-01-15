'use strict';

module.exports = { lengthOfLastWord };

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
