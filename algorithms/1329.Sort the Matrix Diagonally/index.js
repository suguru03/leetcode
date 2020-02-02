'use strict';

module.exports = { diagonalSort };

class Cell {
  constructor(x, y, num) {
    this.x = x;
    this.y = y;
    this.num = num;
  }
}

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
function diagonalSort(mat) {
  const size = mat[0].length + mat.length - 1;
  const list = Array.from({ length: size }, () => []);
  for (const [y, row] of mat.entries()) {
    for (const [x, num] of row.entries()) {
      list[(x - y + size) % size].push(new Cell(x, y, num));
    }
  }
  for (const cells of list) {
    const values = [...cells].sort((c1, c2) => c1.num - c2.num);
    for (const [index, { x, y }] of cells.entries()) {
      mat[y][x] = values[index].num;
    }
  }
  return mat;
}
