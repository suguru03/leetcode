'use strict';

module.exports = { uniquePathsWithObstacles };

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
function uniquePathsWithObstacles(obstacleGrid) {
  const n = obstacleGrid.length;
  const l = obstacleGrid[0].length;
  const dp = Array(l).fill(0);
  dp[0] = 1;
  for (let i = 0; i < n; i++) {
    const row = obstacleGrid[i];
    for (let j = 0; j < l; j++) {
      dp[j] = row[j] ? 0 : j > 0 ? dp[j] + dp[j - 1] : dp[j];
    }
  }
  return dp[l - 1];
}
