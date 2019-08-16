'use strict';

module.exports = { imageSmoother };

/**
 * @param {number[][]} M
 * @return {number[][]}
 */
function imageSmoother(M) {
  const height = M.length;
  const width = M[0].length;
  const result = Array(height);
  for (let h = 0; h < height; h++) {
    result[h] = Array(width);
    for (let w = 0; w < width; w++) {
      let sum = 0;
      let count = 0;
      for (let i = 0; i < 9; i++) {
        const x = (i % 3) - 1 + w;
        const y = ((i / 3) | 0) - 1 + h;
        if (x < 0 || x >= width || y < 0 || y >= height) {
          continue;
        }
        count++;
        sum += M[y][x];
      }
      result[h][w] = Math.floor(sum / count);
    }
  }
  return result;
}
