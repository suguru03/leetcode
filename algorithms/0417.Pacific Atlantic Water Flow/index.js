'use strict';

module.exports = { pacificAtlantic };

const delta = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
function pacificAtlantic(matrix) {
  const n = matrix.length;
  const m = matrix[n - 1]?.length;
  if (!n || !m) {
    return [];
  }
  const result = [];
  const marked = Array.from(matrix, (row) => Array(row.length).fill(0));
  for (let x = 0; x < m; x++) {
    dfs(-Infinity, x, 0, 1);
  }
  for (let y = 0; y < n; y++) {
    dfs(-Infinity, 0, y, 1);
  }
  for (let x = 0; x < m; x++) {
    dfs(-Infinity, x, n - 1, -1);
  }
  for (let y = 0; y < n; y++) {
    dfs(-Infinity, m - 1, y, -1);
  }
  return result;

  function dfs(prev, x, y, mark) {
    if (x < 0 || x >= m || y < 0 || y >= n || matrix[y][x] < prev) {
      return;
    }
    if (marked[y][x] === mark) {
      return;
    }
    if (marked[y][x] === -mark) {
      result.push([y, x]);
    }
    marked[y][x] = mark;
    for (const [dx, dy] of delta) {
      dfs(matrix[y][x], x + dx, y + dy, mark);
    }
  }
}
