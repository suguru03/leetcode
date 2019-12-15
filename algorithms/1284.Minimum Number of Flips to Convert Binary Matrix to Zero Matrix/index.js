'use strict';

module.exports = { minFlips };

class Step {
  constructor(x, y, count, mat) {
    this.x = x;
    this.y = y;
    this.count = count + 1;
    this.mat = mat;
    this.hashCode = `${this.x}:${this.y}:${this.mat}`;
  }
}

function copy(mat) {
  return mat.map(row => [...row]);
}

/**
 * @param {number[][]} mat
 * @return {number}
 */
function minFlips(mat) {
  const m = mat.length;
  const n = mat[0].length;
  const memo = new Set();
  const queue = [new Step(-1, -1, -1, mat)];
  do {
    const { mat, count, hashCode } = queue.shift();
    if (memo.has(hashCode)) {
      continue;
    }
    if (check(mat)) {
      return count;
    }
    memo.add(hashCode);
    for (let y = 0; y < m; y++) {
      for (let x = 0; x < n; x++) {
        queue.push(new Step(x, y, count, flip(x, y, copy(mat))));
      }
    }
  } while (queue.length);

  return -1;

  function check(mat) {
    for (let y = 0; y < m; y++) {
      for (let x = 0; x < n; x++) {
        if (mat[y][x] !== 0) {
          return false;
        }
      }
    }
    return true;
  }

  function flip(x, y, mat) {
    mat[y][x] ^= 1;
    if (x > 0) {
      mat[y][x - 1] ^= 1;
    }
    if (x < n - 1) {
      mat[y][x + 1] ^= 1;
    }
    if (y > 0) {
      mat[y - 1][x] ^= 1;
    }
    if (y < m - 1) {
      mat[y + 1][x] ^= 1;
    }
    return mat;
  }
}
