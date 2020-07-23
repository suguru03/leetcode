'use strict';

module.exports = { longestIncreasingPath };

/**
 * @param {number[][]} matrix
 * @return {number}
 */
function longestIncreasingPath(matrix) {
  const memo = Array.from(matrix, row => Array.from(row).fill(0));
  let ans = 0;
  for (const [y, row] of matrix.entries()) {
    for (const x of row.keys()) {
      ans = Math.max(ans, dfs(x, y, -Infinity));
    }
  }
  return ans;

  function dfs(x, y, prev) {
    if (y < 0 || y >= matrix.length || x < 0 || x >= matrix[y].length) {
      return 0;
    }
    if (prev >= matrix[y][x]) {
      return 0;
    }
    if (memo[y][x] !== 0) {
      return memo[y][x];
    }
    const next = matrix[y][x];
    const count = Math.max(dfs(x - 1, y, next), dfs(x + 1, y, next), dfs(x, y - 1, next), dfs(x, y + 1, next)) + 1;
    memo[y][x] = count;
    return count;
  }
}
