'use strict';

module.exports = { allCellsDistOrder };

/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
function allCellsDistOrder(R, C, r0, c0) {
  const queue = [[r0, c0]];
  const marked = {};
  const result = [];
  while (queue.length) {
    let size = queue.length;
    while (size--) {
      const coordinate = queue.shift();
      const [x, y] = coordinate;
      if (!available(x, y)) {
        continue;
      }
      mark(x, y);
      result.push(coordinate);
      queue.push([x - 1, y]);
      queue.push([x, y - 1]);
      queue.push([x + 1, y]);
      queue.push([x, y + 1]);
    }
  }
  return result;

  function mark(x, y) {
    marked[y] = marked[y] || {};
    marked[y][x] = true;
  }

  function available(x, y) {
    if (x < 0 || x >= R || y < 0 || y >= C) {
      return false;
    }
    return !marked[y] || !marked[y][x];
  }
}
