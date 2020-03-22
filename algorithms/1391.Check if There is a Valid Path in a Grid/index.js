'use strict';

module.exports = { hasValidPath };

const Direction = {
  Top: 0,
  Left: 1,
  Bottom: 2,
  Right: 3,
};

const directionMap = new Map(
  [
    [],
    [[Direction.Left, Direction.Left], [Direction.Right, Direction.Right]],
    [[Direction.Top, Direction.Top], [Direction.Bottom, Direction.Bottom]],
    [[Direction.Right, Direction.Bottom], [Direction.Top, Direction.Left]],
    [[Direction.Top, Direction.Right], [Direction.Left, Direction.Bottom]],
    [[Direction.Bottom, Direction.Left], [Direction.Right, Direction.Top]],
    [[Direction.Bottom, Direction.Right], [Direction.Left, Direction.Top]],
  ].map((list, index) => [index, new Map(list)]),
);

class Cell {
  constructor(x, y, direction) {
    this.x = x;
    this.y = y;
    this.direction = direction;
  }
}

const cellMap = new Map(
  [
    new Cell(0, -1, Direction.Top),
    new Cell(-1, 0, Direction.Left),
    new Cell(0, 1, Direction.Bottom),
    new Cell(1, 0, Direction.Right),
  ].map(cell => [cell.direction, cell]),
);

/**
 * @param {number[][]} grid
 * @return {boolean}
 */
function hasValidPath(grid) {
  const gy = grid.length - 1;
  const gx = grid[gy].length - 1;
  const queue = Object.values(Direction).map(direction => new Cell(0, 0, direction));
  while (queue.length) {
    const { x, y, direction } = queue.shift();
    if (x < 0 || x > gx || y < 0 || y > gy) {
      continue;
    }
    const map = directionMap.get(grid[y][x]);
    if (!map.has(direction)) {
      continue;
    }
    if (x === gx && y === gy) {
      return true;
    }
    grid[y][x] = 0;
    for (const direction of map.values()) {
      const cell = cellMap.get(direction);
      queue.push(new Cell(x + cell.x, y + cell.y, cell.direction));
    }
  }
  return false;
}
