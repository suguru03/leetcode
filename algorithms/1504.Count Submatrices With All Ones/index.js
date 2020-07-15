'use strict';

module.exports = { numSubmat };

/**
 * @param {number[][]} mat
 * @return {number}
 */
function numSubmat(mat) {
  let yl = mat.length;
  let xl = mat[yl - 1].length;
  let total = 0;
  for (let y = 0; y < yl; y++) {
    for (let x = 0; x < xl; x++) {
      total += count(x, y);
    }
  }
  return total;

  function count(x, y) {
    if (mat[y][x] === 0) {
      return 0;
    }
    let count = 0;
    let x0 = 0;
    let y0 = 0;
    for (let x1 = x; x1 >= 0; x1--) {
      if (mat[y][x1] === 0) {
        x0 = x1 + 1;
        break;
      }
      for (let y1 = y; y1 >= y0; y1--) {
        if (mat[y1][x1] === 0) {
          y0 = y1 + 1;
          break;
        }
        count++;
      }
    }
    return count;
  }
}
