'use strict';

module.exports = { closedIsland };

/**
 * @param {number[][]} grid
 * @return {number}
 */
function closedIsland(grid) {
  const rl = grid.length;
  const cl = grid[0].length;
  let count = 0;
  for (let y = 0; y < rl; y++) {
    const row = grid[y];
    for (let x = 0; x < cl; x++) {
      if (row[x] === 1) {
        continue;
      }
      count += dfs(x, y) ? 1 : 0;
    }
  }
  return count;

  function dfs(x, y) {
    if (x < 0 || x >= cl || y < 0 || y >= rl) {
      return false;
    }
    if (grid[y][x] === 1) {
      return true;
    }
    grid[y][x] = 1;
    const x1 = dfs(x - 1, y);
    const x2 = dfs(x + 1, y);
    const y1 = dfs(x, y - 1);
    const y2 = dfs(x, y + 1);
    return x1 && x2 && y1 && y2;
  }
}
