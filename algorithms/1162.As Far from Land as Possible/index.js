'use strict';

module.exports = { maxDistance };

/**
 * @param {number[][]} grid
 * @return {number}
 */
function maxDistance(grid) {
  const queue = [];
  for (const [x, row] of grid.entries()) {
    for (const [y, value] of row.entries()) {
      if (value === 1) {
        queue.push([x, y]);
        row[y] = -1;
      } else {
        row[y] = Infinity;
      }
    }
  }
  const l = grid.length;
  let d = 0;
  let max = -1;
  while (queue.length) {
    d++;
    let size = queue.length;
    while (size--) {
      const [x, y] = queue.shift();
      mark(x - 1, y, d);
      mark(x + 1, y, d);
      mark(x, y - 1, d);
      mark(x, y + 1, d);
    }
  }
  return max;

  function mark(x, y, d) {
    if (x < 0 || x >= l || y < 0 || y >= l) {
      return;
    }
    if (d > grid[x][y]) {
      return;
    }
    grid[x][y] = d;
    max = Math.max(max, d);
    queue.push([x, y]);
  }
}
