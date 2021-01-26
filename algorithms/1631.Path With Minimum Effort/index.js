'use strict';

module.exports = { minimumEffortPath };

const delta = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

/**
 * @param {number[][]} heights
 * @return {number}
 */
function minimumEffortPath(heights) {
  let destY = heights.length - 1;
  let destX = heights[destY].length - 1;
  const dp = Array.from(heights, (row) => Array.from(row).fill(Infinity));
  dp[0][0] = 0;
  const queue = [[0, 0]];
  while (queue.length) {
    const [x0, y0] = queue.shift();
    for (const [dx, dy] of delta) {
      const x1 = x0 + dx;
      const y1 = y0 + dy;
      if (x1 < 0 || x1 > destX || y1 < 0 || y1 > destY) {
        continue;
      }
      const cost = Math.max(dp[y0][x0], Math.abs(heights[y1][x1] - heights[y0][x0]));
      if (cost >= dp[y1][x1]) {
        continue;
      }
      dp[y1][x1] = cost;
      queue.push([x1, y1]);
    }
  }
  return dp[destY][destX];
}
