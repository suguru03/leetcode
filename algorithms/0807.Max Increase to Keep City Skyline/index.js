'use strict';

module.exports = { maxIncreaseKeepingSkyline };

/**
 * @param {number[][]} grid
 * @return {number}
 */
function maxIncreaseKeepingSkyline(grid) {
  const il = grid.length;
  const jl = grid[0].length;
  const imax = Array(il).fill(0);
  const jmax = Array(jl).fill(0);
  for (let i = 0; i < il; i++) {
    const row = grid[i];
    for (let j = 0; j < jl; j++) {
      const n = row[j];
      imax[i] = Math.max(imax[i], n);
      jmax[j] = Math.max(jmax[j], n);
    }
  }
  let sum = 0;
  for (let i = 0; i < il; i++) {
    const row = grid[i];
    for (let j = 0; j < jl; j++) {
      const n = row[j];
      const min = Math.min(imax[i], jmax[j]);
      sum += min - n;
    }
  }
  return sum;
}
