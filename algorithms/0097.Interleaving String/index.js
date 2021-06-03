'use strict';

module.exports = { isInterleave };

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
function isInterleave(s1, s2, s3) {
  const l1 = s1.length;
  const l2 = s2.length;
  if (l1 + l2 !== s3.length) {
    return false;
  }
  const dp = Array.from({ length: l1 + 1 }, () => Array(l2 + 1).fill(false));
  for (let i = 0; i <= l1; i++) {
    for (let j = 0; j <= l2; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = true;
        continue;
      }
      dp[i][j] =
        (i !== 0 && dp[i - 1][j] && s1[i - 1] === s3[i + j - 1]) ||
        (j !== 0 && dp[i][j - 1] && s2[j - 1] === s3[i + j - 1]);
    }
  }
  return dp[l1][l2];
}
