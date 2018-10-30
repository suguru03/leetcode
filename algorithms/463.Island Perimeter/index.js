'use strict';

module.exports = { islandPerimeter, islandPerimeter2 };

/**
 * @param {number[][]} grid
 * @return {number}
 */
function islandPerimeter(grid) {
  const yl = grid.length;
  const xl = yl && grid[0].length;
  let count = 0;
  for (let y = 0; y < yl; y++) {
    const row = grid[y];
    for (let x = 0; x < xl; x++) {
      const n = row[x];
      if (n === 0) {
        continue;
      }
      if (row[x - 1] !== 1) {
        count++;
      }
      if (row[x + 1] !== 1) {
        count++;
      }
      if (y === 0) {
        count++;
      } else if (grid[y - 1][x] !== 1) {
        count++;
      }
      const yd = y + 1;
      if (yd === yl) {
        count++;
      } else if (grid[yd][x] !== 1) {
        count++;
      }
    }
  }
  return count;
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
function islandPerimeter2(grid) {
  const yl = grid.length;
  const xl = yl && grid[0].length;
  for (let y = 0; y < yl; y++) {
    for (let x = 0; x < xl; x++) {
      if (grid[y][x] === 1) {
        return dfs(x, y, grid);
      }
    }
  }
  return 0;
}

function dfs(x, y, grid) {
  const row = grid[y];
  const n = row && row[x];
  switch (n) {
    case -1:
      return 0;
    case 1:
      break;
    default:
      return 1;
  }
  grid[y][x] = -1;
  let count = 0;
  count += dfs(x - 1, y, grid);
  count += dfs(x + 1, y, grid);
  count += dfs(x, y - 1, grid);
  count += dfs(x, y + 1, grid);
  return count;
}
