'use strict';

module.exports = { lengthOfLongestSubstring };

/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  const indexMap = new Map();
  let left = -1;
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    if (indexMap.has(char)) {
      left = Math.max(left, indexMap.get(char));
    }
    max = Math.max(max, i - left);
    indexMap.set(char, i);
  }
  return max;
}
