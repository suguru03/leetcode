'use strict';

module.exports = { findAnagrams };

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
function findAnagrams(s, p) {
  const chars = Array(26).fill(0);
  for (const c of p) {
    chars[charCodeAt(c, 0)]++;
  }
  let left = -1;
  const result = [];
  const current = Array(26).fill(0);
  for (let right = 0; right < s.length; right++) {
    const code = charCodeAt(s, right);
    while (current[code] >= chars[code] && left < right) {
      current[charCodeAt(s, ++left)]--;
    }
    if (current[code] < chars[code]) {
      current[code]++;
    }
    if (right - left === p.length) {
      result.push(left + 1);
    }
  }
  return result;

  function charCodeAt(str, index) {
    return str.charCodeAt(index) - 97;
  }
}
