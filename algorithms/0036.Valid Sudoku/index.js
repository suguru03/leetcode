'use strict';

module.exports = { isValidSudoku };

const len = 9;

/**
 * @param {character[][]} board
 * @return {boolean}
 */
function isValidSudoku(board) {
  const row = Array(len);
  const col = Array(len);
  const pos = Array(len);
  let i = -1;
  while (++i < len) {
    row[i] = Array(len);
    col[i] = Array(len);
    pos[i] = Array(len);
  }
  i = -1;
  while (++i < len) {
    let j = -1;
    while (++j < len) {
      const n = +board[i][j] - 1;
      if (isNaN(n)) {
        continue;
      }
      const x = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      if (row[i][n] || col[j][n] || pos[x][n]) {
        return false;
      }
      row[i][n] = true;
      col[j][n] = true;
      pos[x][n] = true;
    }
  }
  return true;
}
