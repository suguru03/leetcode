'use strict';

module.exports = { minPathSum };

/**
 * @param {number[][]} grid
 * @return {number}
 */
function minPathSum(grid) {
  const m = grid.length - 1;
  const n = grid[m].length - 1;
  for (let y = 0; y <= m; y++) {
    for (let x = 0; x <= n; x++) {
      if (x === 0 && y === 0) {
        continue;
      }
      grid[y][x] += Math.min(x === 0 ? Infinity : grid[y][x - 1], y === 0 ? Infinity : grid[y - 1][x]);
    }
  }
  return grid[m][n];
}
