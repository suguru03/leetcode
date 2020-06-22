'use strict';

module.exports = { calculateMinimumHP };

/**
 * @param {number[][]} dungeon
 * @return {number}
 */
function calculateMinimumHP(dungeon) {
  if (dungeon.length === 0) {
    return 1;
  }
  const yl = dungeon.length - 1;
  const xl = dungeon[yl].length - 1;
  const dp = Array(xl).fill(Infinity);
  dp[xl] = 1;
  for (let y = yl; y >= 0; y--) {
    for (let x = xl; x >= 0; x--) {
      dp[x] = Math.max(1, Math.min(dp[x + 1] || Infinity, dp[x]) - dungeon[y][x]);
    }
  }
  return dp[0];
}
