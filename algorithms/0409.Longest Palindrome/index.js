'use strict';

module.exports = { longestPalindrome };

/**
 * @param {string} s
 * @return {number}
 */
function longestPalindrome(s) {
  let count = 0;
  const map = {};
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    count += map[c] & 1;
    map[c] = map[c] ^ 1;
  }
  count *= 2;
  const keys = Object.keys(map);
  for (let i = 0; i < keys.length; i++) {
    if (map[keys[i]]) {
      return count + 1;
    }
  }
  return count;
}
