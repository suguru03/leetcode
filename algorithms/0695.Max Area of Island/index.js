'use strict';

module.exports = { maxAreaOfIsland };

/**
 * @param {number[][]} grid
 * @return {number}
 */
function maxAreaOfIsland(grid) {
  let result = 0;
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      result = Math.max(result, dfs(x, y));
    }
  }
  return result;

  function dfs(x, y) {
    if (y < 0 || y >= grid.length || x < 0 || x >= grid[y].length) {
      return 0;
    }
    if (grid[y][x] === 0) {
      return 0;
    }
    grid[y][x] = 0;
    return dfs(x - 1, y) + dfs(x + 1, y) + dfs(x, y - 1) + dfs(x, y + 1) + 1;
  }
}
