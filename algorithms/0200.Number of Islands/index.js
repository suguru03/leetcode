'use strict';

module.exports = { numIslands };

/**
 * @param {character[][]} grid
 * @return {number}
 */
function numIslands(grid) {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    const row = grid[i];
    for (let j = 0; j < row.length; j++) {
      if (row[j] !== '1') {
        continue;
      }
      count++;
      mark(grid, i, j);
    }
  }
  return count;
}

function mark(grid, i, j) {
  if (!grid[i] || grid[i][j] !== '1') {
    return;
  }
  grid[i][j] = '0';
  mark(grid, i - 1, j);
  mark(grid, i + 1, j);
  mark(grid, i, j - 1);
  mark(grid, i, j + 1);
}
