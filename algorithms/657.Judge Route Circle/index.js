'use strict';

module.exports = { judgeCircle };

/**
 * @param {string} moves
 * @return {boolean}
 */
function judgeCircle(moves) {
  let x = 0;
  let y = 0;
  let l = moves.length;
  while (l--) {
    switch (moves[l]) {
    case 'U':
      y++;
      break;
    case 'D':
      y--;
      break;
    case 'R':
      x++;
      break;
    case 'L':
      x--;
      break;
    }
  }
  return x === 0 && y === 0;
}
