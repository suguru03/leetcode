'use strict';

module.exports = { findMaxForm };

/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
function findMaxForm(strs, m, n) {
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  for (const str of strs) {
    const [zeros, ones] = count(str);
    for (let z = m - zeros; z >= 0; z--) {
      for (let o = n - ones; o >= 0; o--) {
        dp[z + zeros][o + ones] = Math.max(dp[z + zeros][o + ones], dp[z][o] + 1);
      }
    }
  }
  return dp[m][n];
}

function count(str) {
  let zeros = 0;
  for (const c of str) {
    if (c === '0') {
      zeros++;
    }
  }
  return [zeros, str.length - zeros];
}
