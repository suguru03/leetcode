'use strict';

module.exports = { solve, solve2 };

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
  const marked = Array.from(board, (row) => Array.from(row).fill(0));
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

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
function solve2(board) {
  const seen = Array.from(board, (row) => Array(row.length));
  for (let y = 1; y < board.length - 1; y++) {
    for (let x = 1; x < board[y].length - 1; x++) {
      if (seen[y][x]) {
        const [x0, y0] = seen;
        board[y][x] = board[y0][x0];
        continue;
      }

      if (check(x, y, [x, y])) {
        board[y][x] = 'X';
      }
    }
  }

  function check(x, y, group) {
    if (y < 0 || y >= board.length || x < 0 || x >= board[y].length) {
      return false;
    }

    if (board[y][x] === 'X') {
      return true;
    }

    if (seen[y][x]) {
      return group === seen[y][x];
    }

    seen[y][x] = group;
    return check(x - 1, y, group) && check(x, y - 1, group) && check(x + 1, y, group) && check(x, y + 1, group);
  }
}
