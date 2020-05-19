'use strict';

module.exports = { checkInclusion };

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
function checkInclusion(s1, s2) {
  const chars = Array(26).fill(0);
  for (let i = 0; i < s1.length; i++) {
    chars[charCodeAt(s1, i)]++;
  }
  let left = 0;
  let right = 0;
  while (right < s2.length) {
    if (chars[charCodeAt(s2, right)] > 0) {
      chars[charCodeAt(s2, right++)]--;
    } else {
      chars[charCodeAt(s2, left++)]++;
    }
    if (right - left === s1.length) {
      return true;
    }
  }
  return false;

  function charCodeAt(s, i) {
    return s.charCodeAt(i) - 97;
  }
}
