'use strict';

module.exports = { longestCommonSubsequence };

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
function longestCommonSubsequence(text1, text2) {
  const l1 = text1.length;
  const l2 = text2.length;
  const dp = Array.from({ length: l1 + 1 }, () => Array(l2 + 1).fill(0));
  for (let i1 = 0; i1 < l1; i1++) {
    for (let i2 = 0; i2 < l2; i2++) {
      if (text1[i1] === text2[i2]) {
        dp[i1 + 1][i2 + 1] = dp[i1][i2] + 1;
        continue;
      }
      dp[i1 + 1][i2 + 1] = Math.max(dp[i1][i2 + 1], dp[i1 + 1][i2]);
    }
  }
  return dp[l1][l2];
}
