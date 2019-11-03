'use strict';

module.exports = { uniquePathsWithObstacles };

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
function uniquePathsWithObstacles(obstacleGrid) {
  const y = obstacleGrid.length;
  const x = obstacleGrid[0].length;
  const dp = Array(y).fill(0);
  dp[0] = 1;
  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      dp[j] = obstacleGrid[j][i] ? 0 : dp[j] + (dp[j - 1] || 0);
    }
  }
  return dp[y - 1];
}
