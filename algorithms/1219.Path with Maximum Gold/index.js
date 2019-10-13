'use strict';

module.exports = { getMaximumGold };

/**
 * @param {number[][]} grid
 * @return {number}
 */
function getMaximumGold(grid) {
  let max = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 0) {
        continue;
      }
      max = Math.max(max, dfs(i, j, 0));
    }
  }
  return max;

  function dfs(i, j) {
    if (!grid[i] || !grid[i][j]) {
      return 0;
    }
    const gold = grid[i][j];
    grid[i][j] = 0;
    const max = Math.max(dfs(i + 1, j), dfs(i - 1, j), dfs(i, j + 1), dfs(i, j - 1)) + gold;
    grid[i][j] = gold;
    return max;
  }
}
