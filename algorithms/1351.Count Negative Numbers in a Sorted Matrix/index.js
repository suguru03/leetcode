'use strict';

module.exports = { countNegatives };

/**
 * @param {number[][]} grid
 * @return {number}
 */
function countNegatives(grid) {
  const [row] = grid;
  let count = grid.length * row.length;
  let x = row.length - 1;
  let y = 0;
  while (y < grid.length && x >= 0) {
    if (grid[y][x] < 0) {
      x--;
      continue;
    }
    count -= x + 1;
    y++;
  }
  return count;
}
