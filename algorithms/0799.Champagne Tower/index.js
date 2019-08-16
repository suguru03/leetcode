'use strict';

module.exports = { champagneTower };

/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
function champagneTower(poured, query_row, query_glass) {
  const dp = Array(query_row);
  dp[0] = [poured];
  for (let i = 1; i <= query_row; i++) {
    dp[i] = Array(i + 1).fill(0);
    const last = dp[i - 1];
    for (let j = 0; j < i; j++) {
      let n = last[j] || 0;
      if (n < 1) {
        continue;
      }
      last[j] = 1;
      n -= 1;
      dp[i][j] += n / 2;
      dp[i][j + 1] += n / 2;
    }
  }
  const r = dp[query_row][query_glass] || 0;
  return r > 1 ? 1 : r;
}
