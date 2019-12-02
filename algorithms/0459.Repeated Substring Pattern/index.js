'use strict';

module.exports = { repeatedSubstringPattern, repeatedSubstringPattern2 };

/**
 * @param {string} s
 * @return {boolean}
 */
function repeatedSubstringPattern(s) {
  const size = s.length;
  let cur = (1 + size / 2) | 0;
  while (--cur && s.slice(0, cur).repeat(size / cur) !== s) {}
  return cur !== 0;
}

/**
 * @param {string} s
 * @return {boolean}
 */
function repeatedSubstringPattern2(s) {
  return s
    .repeat(2)
    .slice(1, -1)
    .includes(s);
}
