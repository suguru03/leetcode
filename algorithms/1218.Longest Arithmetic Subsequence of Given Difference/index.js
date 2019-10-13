'use strict';

module.exports = { longestSubsequence };

/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
function longestSubsequence(arr, difference) {
  const map = new Map();
  let max = 0;
  for (const n of arr) {
    let sum = map.get(n - difference) || 0;
    max = Math.max(max, ++sum);
    map.set(n, sum);
  }
  return max;
}
