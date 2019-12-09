'use strict';

module.exports = { tictactoe };

/**
 * @param {number[][]} moves
 * @return {string}
 */
function tictactoe(moves) {
  const size = 3;
  const [rowA, rowB, columnA, columnB] = Array.from({ length: 4 }, () => Array(size).fill(0));
  let [da1, da2, db1, db2] = Array(4).fill(0);
  const setA = {
    player: 'A',
    row: rowA,
    column: columnA,
    d1: da1,
    d2: da2,
  };
  const setB = {
    player: 'B',
    row: rowB,
    column: columnB,
    d1: db1,
    d2: db2,
  };
  for (const [index, [x, y]] of moves.entries()) {
    const set = index % 2 === 0 ? setA : setB;
    if (
      ++set.column[x] === size ||
      ++set.row[y] === size ||
      (x === y && ++set.d1 === size) ||
      (x + y === 2 && ++set.d2 === size)
    ) {
      return set.player;
    }
  }
  return moves.length === size * 3 ? 'Draw' : 'Pending';
}
