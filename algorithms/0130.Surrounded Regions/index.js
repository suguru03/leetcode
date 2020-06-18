'use strict';

module.exports = { solve };

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
function solve(board) {
  if (board.length === 0) {
    return;
  }
  let yl = board.length;
  let xl = board[0].length;
  let groupCount = 0;
  const surroundedSet = new Set();
  const marked = Array.from(board, row => Array.from(row).fill(0));
  for (let y = 0; y < yl; y++) {
    for (let x = 0; x < xl; x++) {
      if (board[y][x] === 'X') {
        continue;
      }
      let group = marked[y][x];
      if (!group) {
        group = ++groupCount;
        if (dfs(x, y, group)) {
          surroundedSet.add(group);
        }
      }
      if (surroundedSet.has(group)) {
        board[y][x] = 'X';
      }
    }
  }

  function dfs(x, y, group) {
    if (x < 0 || x >= xl || y < 0 || y >= yl) {
      return false;
    }
    if (board[y][x] === 'X') {
      return true;
    }
    if (marked[y][x]) {
      return marked[y][x] === group;
    }
    marked[y][x] = group;
    return dfs(x - 1, y, group) && dfs(x + 1, y, group) && dfs(x, y - 1, group) && dfs(x, y + 1, group);
  }
}
