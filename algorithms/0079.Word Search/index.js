'use strict';

module.exports = { exist };

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
function exist(board, word) {
  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[y].length; x++) {
      if (dfs(0, x, y)) {
        return true;
      }
    }
  }
  return false;

  function dfs(index, x, y) {
    if (word.length === index) {
      return true;
    }
    if (y < 0 || y >= board.length || x < 0 || x >= board[y].length) {
      return false;
    }
    if (word[index++] !== board[y][x]) {
      return false;
    }
    board[y][x] = null;
    if (dfs(index, x - 1, y) || dfs(index, x + 1, y) || dfs(index, x, y - 1) || dfs(index, x, y + 1)) {
      return true;
    }
    board[y][x] = word[--index];
    return false;
  }
}
