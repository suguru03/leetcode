'use strict';

module.exports = { findAnagrams };

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
function findAnagrams(s, p) {
  const chars = Array(26).fill(0);
  for (let i = 0; i < p.length; i++) {
    chars[charCodeAt(p, i)]++;
  }
  let left = 0;
  let right = 0;
  const result = [];
  while (right < s.length) {
    if (chars[charCodeAt(s, right)] > 0) {
      chars[charCodeAt(s, right++)]--;
    } else {
      chars[charCodeAt(s, left++)]++;
    }
    if (right - left === p.length) {
      result.push(left);
    }
  }
  return result;

  function charCodeAt(s, i) {
    return s.charCodeAt(i) - 97;
  }
}
