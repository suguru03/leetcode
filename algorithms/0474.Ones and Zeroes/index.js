'use strict';

module.exports = { findMaxForm };

/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
function findMaxForm(strs, m, n) {
  let dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  for (const str of strs) {
    const next = Array.from(dp, (row) => [...row]);
    const [zeros, ones] = count(str);
    for (let z = 0; z <= m - zeros; z++) {
      for (let o = 0; o <= n - ones; o++) {
        next[z + zeros][o + ones] = Math.max(next[z + zeros][o + ones], dp[z][o] + 1);
      }
    }
    dp = next;
  }
  return Math.max(...dp.flat());
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
