'use strict';

module.exports = { maxAreaOfIsland, maxAreaOfIsland2 };

/**
 * @param {number[][]} grid
 * @return {number}
 */
function maxAreaOfIsland(grid) {
  let result = 0;
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      result = Math.max(result, dfs(x, y));
    }
  }
  return result;

  function dfs(x, y) {
    if (y < 0 || y >= grid.length || x < 0 || x >= grid[y].length) {
      return 0;
    }
    if (grid[y][x] === 0) {
      return 0;
    }
    grid[y][x] = 0;
    return dfs(x - 1, y) + dfs(x + 1, y) + dfs(x, y - 1) + dfs(x, y + 1) + 1;
  }
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
function maxAreaOfIsland2(grid) {
  let max = 0;
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      max = Math.max(max, bfs(x, y));
    }
  }
  return max;

  function bfs(x, y) {
    let count = 0;
    if (grid[y][x] === 0) {
      return count;
    }

    const queue = [[x, y]];
    while (queue.length > 0) {
      const [x, y] = queue.shift();
      if (y < 0 || y >= grid.length || x < 0 || x >= grid[y].length || grid[y][x] === 0) {
        continue;
      }
      count++;
      grid[y][x] = 0;
      queue.push([x - 1, y]);
      queue.push([x, y - 1]);
      queue.push([x + 1, y]);
      queue.push([x, y + 1]);
    }

    return count;
  }
}
