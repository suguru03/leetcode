'use strict';

module.exports = lengthOfLongestSubstring;

/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  let max = 0;
  let left = 0;
  const set = new Set();
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    while (set.has(c)) {
      const c1 = s[left++];
      set.delete(c1);
    }
    set.add(c);
    max = Math.max(max, i - left + 1);
  }
  return max;
}
