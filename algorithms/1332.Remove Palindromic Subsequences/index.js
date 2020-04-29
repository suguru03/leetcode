'use strict';

module.exports = { removePalindromeSub, removePalindromeSub2 };

/**
 * @param {string} s
 * @return {number}
 */
function removePalindromeSub(s) {
  if (s.length === 0) {
    return 0;
  }
  let left = -1;
  let right = s.length;
  while (++left < --right) {
    if (s[left] !== s[right]) {
      return 2;
    }
  }
  return 1;
}

/**
 * @param {string} s
 * @return {number}
 */
function removePalindromeSub2(s) {
  return s.length === 0
    ? 0
    : s ===
      s
        .split('')
        .reverse()
        .join('')
    ? 1
    : 2;
}
