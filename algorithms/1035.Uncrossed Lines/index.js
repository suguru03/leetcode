'use strict';

module.exports = { maxUncrossedLines };

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
function maxUncrossedLines(A, B) {
  const dp = Array.from(B, () => Array(A.length).fill(0));
  for (const [j, b] of B.entries()) {
    for (const [i, a] of A.entries()) {
      dp[j][i] = Math.max(get(i - 1, j - 1) + Number(a === b), get(i - 1, j), get(i, j - 1));
    }
  }
  return dp[B.length - 1][A.length - 1];

  function get(i, j) {
    if (i < 0 || j < 0) {
      return 0;
    }
    return dp[j][i];
  }
}
