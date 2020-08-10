'use strict';

module.exports = { orangesRotting };

class Cell {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
function orangesRotting(grid) {
  let fresh = 0;
  const queue = [];
  for (const [y, row] of grid.entries()) {
    for (const [x, val] of row.entries()) {
      switch (val) {
        case 1: {
          fresh++;
          break;
        }
        case 2: {
          grid[y][x] = 0;
          queue.push(new Cell(x, y));
          break;
        }
      }
    }
  }
  let elapse = 0;
  const delta = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  while (fresh > 0 && queue.length > 0) {
    elapse++;
    let size = queue.length;
    while (--size >= 0) {
      const { x, y } = queue.shift();
      for (const [dx, dy] of delta) {
        if (isFresh(x + dx, y + dy)) {
          const next = new Cell(x + dx, y + dy);
          fresh--;
          grid[next.y][next.x] = 0;
          queue.push(next);
        }
      }
    }
  }
  return fresh === 0 ? elapse : -1;

  function isFresh(x, y) {
    if (y < 0 || y >= grid.length || x < 0 || x >= grid[y].length) {
      return false;
    }
    return grid[y][x] === 1;
  }
}
