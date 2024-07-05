'use strict';

module.exports = { orangesRotting };

/**
 * @param {number[][]} grid
 * @return {number}
 */
function orangesRotting(grid) {
  let fresh = 0;
  const queue = [];
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      switch (grid[y][x]) {
        case 1: {
          fresh++;
          break;
        }
        case 2: {
          queue.push({ x, y });
        }
      }
    }
  }

  let elapsed = 0;
  const delta = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  while (fresh > 0 && queue.length > 0) {
    elapsed++;
    let size = queue.length;
    while (--size >= 0) {
      const root = queue.shift();
      for (const [dx, dy] of delta) {
        let x = root.x + dx;
        let y = root.y + dy;
        if (y < 0 || y >= grid.length || x < 0 || x >= grid[y].length || grid[y][x] !== 1) {
          continue;
        }

        fresh--;
        grid[y][x] = 2;
        queue.push({ x, y });
      }
    }
  }

  return fresh === 0 ? elapsed : -1;
}
