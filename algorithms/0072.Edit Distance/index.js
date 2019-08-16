'use strict';

module.exports = { minDistance };

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
function minDistance(word1, word2) {
  const l1 = word1.length;
  const l2 = word2.length;
  const dp = Array.from({ length: l1 + 1 }, () => Array(l2 + 1));
  for (let i = 0; i <= l1; i++) {
    dp[i][0] = i;
  }
  for (let i = 0; i <= l2; i++) {
    dp[0][i] = i;
  }
  for (let i = 1; i <= l1; i++) {
    const c1 = word1[i - 1];
    for (let j = 1; j <= l2; j++) {
      const c2 = word2[j - 1];
      const d0 = dp[i - 1][j - 1];
      const d1 = dp[i][j - 1];
      const d2 = dp[i - 1][j];
      const p = c1 === c2 ? 0 : 1;
      dp[i][j] = Math.min(d0 + p, d1 + 1, d2 + 1);
    }
  }
  return dp[l1][l2];
}
