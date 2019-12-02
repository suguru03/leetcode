'use strict';

module.exports = { countServers, countServers2 };

/**
 * @param {number[][]} grid
 * @return {number}
 */
function countServers(grid) {
  let cl = grid.length;
  let rl = grid[0].length;
  let total = 0;
  for (const [y, row] of grid.entries()) {
    for (const [x, val] of row.entries()) {
      if (val === 0) {
        continue;
      }
      const count = dfs(x, y);
      if (count > 1) {
        total += count;
      }
    }
  }
  return total;

  function dfs(x0, y0) {
    grid[y0][x0] = 0;
    let count = 1;
    for (let y = 0; y < cl; y++) {
      if (y !== y0 && grid[y][x0] === 1) {
        count += dfs(x0, y);
      }
    }
    for (let x = 0; x < rl; x++) {
      if (x !== x0 && grid[y0][x] === 1) {
        count += dfs(x, y0);
      }
    }
    return count;
  }
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
function countServers2(grid) {
  const rl = grid.length;
  const cl = grid[0].length;
  const rows = Array(rl).fill(0);
  const columns = Array(cl).fill(0);
  for (const [y, row] of grid.entries()) {
    for (const [x, val] of row.entries()) {
      if (val === 0) {
        continue;
      }
      rows[y]++;
      columns[x]++;
    }
  }
  let total = 0;
  for (const [y, row] of grid.entries()) {
    for (const [x, val] of row.entries()) {
      if (val === 0) {
        continue;
      }
      const count = rows[y] + columns[x];
      if (count > 2) {
        total++;
      }
    }
  }
  return total;
}
