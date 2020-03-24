'use strict';

module.exports = { numRookCaptures, numRookCaptures2 };

/**
 * @param {character[][]} board
 * @return {number}
 */
function numRookCaptures(board) {
  const delta = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  for (const [y, row] of board.entries()) {
    for (const [x, piece] of row.entries()) {
      if (piece !== 'R') {
        continue;
      }
      return delta.reduce((sum, [dx, dy]) => sum + count(x + dx, y + dy, dx, dy), 0);
    }
  }

  function count(x, y, dx, dy) {
    if (x < 0 || x >= 8 || y < 0 || y >= 8) {
      return 0;
    }
    switch (board[y][x]) {
      case 'B':
        return 0;
      case 'p':
        return 1;
      default:
        return count(x + dx, y + dy, dx, dy);
    }
  }
}

/**
 * @param {character[][]} board
 * @return {number}
 */
function numRookCaptures2(board) {
  const size = 8;
  const total = size ** 2;
  for (let n = 0; n < total; n++) {
    const x = n % size;
    const y = (n / size) | 0;
    if (board[y][x] !== 'R') {
      continue;
    }
    return count(x, size) + count(y * size, 1);
  }

  function count(n, d) {
    let pawn = 0;
    let prev = 0;
    let rook = false;
    loop: for (let i = 0; i < size; i++) {
      const x = n % size;
      const y = (n / size) | 0;
      switch (board[y][x]) {
        case 'p':
          pawn = 1;
          break;
        case 'R':
          [prev, pawn, rook] = [pawn, 0, true];
          break;
        case 'B':
          if (rook) {
            break loop;
          }
          pawn = 0;
      }
      n += d;
    }
    return prev + pawn;
  }
}
