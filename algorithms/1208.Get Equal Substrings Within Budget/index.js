'use strict';

module.exports = { equalSubstring };

/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
function equalSubstring(s, t, maxCost) {
  let left = -1;
  let right = -1;
  let cost = 0;
  let max = 0;
  while (++right < s.length) {
    cost += getDiff(right);
    while (cost > maxCost) {
      cost -= getDiff(++left);
    }
    max = Math.max(max, right - left);
  }
  return max;

  function getDiff(index) {
    return Math.abs(s.charCodeAt(index) - t.charCodeAt(index));
  }
}
