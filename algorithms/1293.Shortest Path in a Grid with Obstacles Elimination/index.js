'use strict';

module.exports = { shortestPath };

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
function shortestPath(grid, k) {
  class Cell {
    constructor(x, y, count, eliminated) {
      this.x = x;
      this.y = y;
      this.count = count;
      this.eliminated = grid[y] && grid[y][x] === 1 ? ++eliminated : eliminated;
      this.hash = `${x}:${y}:${eliminated}`;
    }
  }

  const m = grid.length - 1;
  const n = grid[0].length - 1;
  const queue = [new Cell(0, 0, 0, 0)];
  const memo = new Set();
  let min = Infinity;
  while (queue.length) {
    const cell = queue.shift();
    let { x, y, count, eliminated, hash } = cell;
    if (memo.has(hash)) {
      continue;
    }
    memo.add(hash);
    if (x < 0 || x > n || y < 0 || y > m) {
      continue;
    }
    if (eliminated > k) {
      continue;
    }
    if (x === n && y === m) {
      min = Math.min(min, count);
      continue;
    }
    if (count++ >= min) {
      continue;
    }
    queue.push(
      new Cell(x - 1, y, count, eliminated),
      new Cell(x + 1, y, count, eliminated),
      new Cell(x, y - 1, count, eliminated),
      new Cell(x, y + 1, count, eliminated),
    );
  }
  return min === Infinity ? -1 : min;
}
