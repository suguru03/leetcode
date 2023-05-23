'use strict';

module.exports = { numIslands, numIslands2 };

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

/**
 * @param {character[][]} grid
 * @return {number}
 */
function numIslands2(grid) {
  let result = 0;
  for (const [y, row] of grid.entries()) {
    for (const [x, n] of row.entries()) {
      if (n === '0') {
        continue;
      }
      result++;
      const queue = [[x, y]];
      while (queue.length !== 0) {
        const [x, y] = queue.shift();
        if (grid[y]?.[x] !== '1') {
          continue;
        }
        grid[y][x] = '0';
        queue.push([x - 1, y], [x, y - 1], [x + 1, y], [x, y + 1]);
      }
    }
  }
  return result;
}
