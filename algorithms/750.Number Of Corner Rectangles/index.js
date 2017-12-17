'use strict';

module.exports = { countCornerRectangles };

/**
 * https://leetcode.com/contest/weekly-contest-63/ranking/1/ from uwi-san
 * @param {number[][]} grid
 * @return {number}
 */
function countCornerRectangles(grid) {
  const n = grid.length;
  const m = grid[0].length;
  let res = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      let np = 0;
      for (let k  = 0; k < m; k++) {
        if (grid[i][k] === 1 && grid[j][k] === 1) {
          np++;
        }
      }
      res += np * (np - 1) / 2;
    }
  }
  return res;
}
