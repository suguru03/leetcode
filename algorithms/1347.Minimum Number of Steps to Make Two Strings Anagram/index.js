'use strict';

module.exports = { minSteps };

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
function minSteps(s, t) {
  const countMap = {};
  for (const c of t) {
    countMap[c] = ++countMap[c] || 1;
  }
  let count = 0;
  for (const c of s) {
    if (countMap[c]) {
      countMap[c]--;
      continue;
    }
    count++;
  }
  return count;
}
