'use strict';

module.exports = { maxAreaOfIsland, maxAreaOfIsland2 };

/**
 * @param {number[][]} grid
 * @return {number}
 */
function maxAreaOfIsland(grid) {
  const lr = grid.length;
  const lc = lr ? grid[0].length : 0;
  let max = 0;
  for (let r = 0; r < lr; r++) {
    for (let c = 0; c < lc; c++) {
      max = Math.max(max, dfs(r, c));
    }
  }
  return max;

  function dfs(r, c) {
    // if (r < 0 || r >= lr || c < 0 || c >= lc || grid[r][c] === 0) {
    if (!grid[r] || !grid[r][c]) {
      return 0;
    }
    grid[r][c] = 0;
    return dfs(r - 1, c) + dfs(r + 1, c) + dfs(r, c - 1) + dfs(r, c + 1) + 1;
  }
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
function maxAreaOfIsland2(grid) {
  let max = 0;
  for (const [r, row] of grid.entries()) {
    for (const c of row.keys()) {
      max = Math.max(max, dfs(r, c));
    }
  }
  return max;

  function dfs(r, c) {
    if (!grid[r] || !grid[r][c]) {
      return 0;
    }
    grid[r][c] = 0;
    return dfs(r - 1, c) + dfs(r + 1, c) + dfs(r, c - 1) + dfs(r, c + 1) + 1;
  }
}
