'use strict';

module.exports = lengthOfLongestSubstring;

/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  let l = s.length;
  let max = 0;
  let last = l - 1;
  let hash = {};
  while (l--) {
    const c = s[l];
    let n;
    if (hash[c] === undefined) {
      n = last - l + 1;
    } else {
      const i = hash[c];
      n = i - l;
      while (last >= i) {
        hash[s[last--]] = undefined;
      }
    }
    hash[c] = l;
    max = max > n ? max : n;
  }
  return max;
}
