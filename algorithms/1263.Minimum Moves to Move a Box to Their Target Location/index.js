'use strict';

module.exports = { minPushBox };

class Coordinate {
  constructor(x, y, count = 0) {
    this.x = x;
    this.y = y;
    this.count = count;
  }
}

/**
 * @param {character[][]} grid
 * @return {number}
 */
function minPushBox(grid) {
  const moved = [];
  const checked = [];
  let t, b, s;
  for (const [y, row] of grid.entries()) {
    moved[y] = [];
    checked[y] = [];
    for (const [x, c] of row.entries()) {
      moved[y][x] = new Set();
      checked[y][x] = 1;
      switch (c) {
        case '#':
          checked[y][x] = -1;
          break;
        case 'T':
          t = new Coordinate(x, y);
          break;
        case 'B':
          b = new Coordinate(x, y);
          break;
        case 'S':
          s = new Coordinate(x, y);
          break;
      }
    }
  }
  let min = Infinity;
  let reachableIndex = 1;
  const queue = [[b, s]];
  const move = [new Coordinate(-1, 0), new Coordinate(1, 0), new Coordinate(0, -1), new Coordinate(0, 1)];
  while (queue.length) {
    const [b, s] = queue.shift();
    for (const m of move) {
      if (moved[b.y][b.x].has(m)) {
        continue;
      }
      const nt = new Coordinate(b.x + m.x, b.y + m.y, b.count + 1);
      if (nt.count >= min) {
        continue;
      }
      const row = grid[nt.y] || [];
      const v = row[nt.x] || '#';
      if (v === '#') {
        continue;
      }
      if (!reachable(b, s, new Coordinate(b.x - m.x, b.y - m.y), ++reachableIndex)) {
        continue;
      }
      moved[b.y][b.x].add(m);
      if (nt.x === t.x && nt.y === t.y) {
        min = Math.min(min, nt.count);
        continue;
      }
      queue.push([nt, b]);
    }
  }
  return min === Infinity ? -1 : min;

  function reachable(b, s, t, index) {
    const row = checked[s.y] || [];
    const v = row[s.x] || -1;
    if (v === -1 || v === index) {
      return false;
    }
    if (s.x === b.x && s.y === b.y) {
      return false;
    }
    if (s.x === t.x && s.y === t.y) {
      return true;
    }
    row[s.x] = index;
    return (
      reachable(b, new Coordinate(s.x - 1, s.y), t, index) ||
      reachable(b, new Coordinate(s.x + 1, s.y), t, index) ||
      reachable(b, new Coordinate(s.x, s.y - 1), t, index) ||
      reachable(b, new Coordinate(s.x, s.y + 1), t, index)
    );
  }
}
