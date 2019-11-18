'use strict';

module.exports = { shiftGrid };

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
function shiftGrid(grid, k) {
  const newGrid = Array.from(grid, row => Array.from(row));
  for (const [y, row] of grid.entries()) {
    for (const [x, val] of row.entries()) {
      const x0 = x + k;
      const xd = x0 % row.length;
      const yd = ((y + x0 / row.length) | 0) % grid.length;
      newGrid[yd][xd] = val;
    }
  }
  return newGrid;
}
