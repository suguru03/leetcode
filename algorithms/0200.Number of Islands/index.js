'use strict';

module.exports = { numIslands };

/**
 * @param {character[][]} grid
 * @return {number}
 */
function numIslands(grid) {
  let count = 0;
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === '0') {
        continue;
      }
      dfs(x, y);
      count++;
    }
  }
  return count;

  function dfs(x, y) {
    const row = grid[y];
    if (!row || row[x] !== '1') {
      return;
    }
    row[x] = '0';
    dfs(x - 1, y);
    dfs(x + 1, y);
    dfs(x, y - 1);
    dfs(x, y + 1);
  }
}
