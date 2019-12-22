'use strict';

module.exports = { maxSideLength };

/**
 * @param {number[][]} mat
 * @param {number} threshold
 * @return {number}
 */
function maxSideLength(mat, threshold) {
  const rl = mat.length;
  const cl = mat[0].length;
  let min = 0;
  let max = Math.min(rl, cl) + 1;
  loop: while (min <= max) {
    const size = ((min + max) / 2) | 0;
    for (let y = 0; y <= rl - size; y++) {
      for (let x = 0; x <= cl - size; x++) {
        if (check(x, y, size)) {
          min = size + 1;
          continue loop;
        }
      }
    }
    max = size - 1;
  }
  return max;

  function check(x, y, size) {
    let sum = 0;
    for (let dy = y; dy < y + size; dy++) {
      for (let dx = x; dx < x + size; dx++) {
        sum += mat[dy][dx];
        if (sum > threshold) {
          return false;
        }
      }
    }
    return true;
  }
}
