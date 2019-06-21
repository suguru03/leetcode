'use strict';

module.exports = { shortestPathBinaryMatrix };

/**
 * @param {number[][]} grid
 * @return {number}
 */
function shortestPathBinaryMatrix(grid) {
  if (grid[0][0] === 1) {
    return -1;
  }

  const l = grid.length;
  const marked = Array.from(grid, () => Array(l));
  const queue = [[0, 0, 1]];
  while (queue.length) {
    const [x1, y1, c1] = queue.shift();
    if (x1 === l - 1 && y1 === l - 1) {
      return c1;
    }
    marked[x1][y1] = true;
    const c2 = c1 + 1;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        const x2 = x1 + i;
        const y2 = y1 + j;
        if (x2 < 0 || x2 >= l || y2 < 0 || y2 >= l || marked[x2][y2] || grid[x2][y2]) {
          continue;
        }
        marked[x2][y2] = true;
        queue.push([x2, y2, c2]);
      }
    }
  }
  return -1;
}
