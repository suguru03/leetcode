'use strict';

module.exports = { minCost };

/**
 * @param {number[][]} grid
 * @return {number}
 */
function minCost(grid) {
  const yl = grid.length;
  const xl = grid[0].length;
  const costs = Array.from(grid, row => Array.from(row, () => Infinity));
  dfs(0, 0, 0);
  return costs[yl - 1][xl - 1];
  function dfs(x, y, cost) {
    if (x < 0 || x >= xl || y < 0 || y >= yl) {
      return;
    }
    if (cost >= costs[y][x]) {
      return;
    }
    costs[y][x] = cost;
    const cell = grid[y][x];
    dfs(x + 1, y, cell === 1 ? cost : cost + 1);
    dfs(x - 1, y, cell === 2 ? cost : cost + 1);
    dfs(x, y + 1, cell === 3 ? cost : cost + 1);
    dfs(x, y - 1, cell === 4 ? cost : cost + 1);
  }
}
