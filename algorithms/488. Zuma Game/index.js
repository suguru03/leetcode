'use strict';

module.exports = { findMinStep };

/**
 * @param {string} board
 * @param {string} hand
 * @return {number}
 */
function findMinStep(board, hand) {
  const handMap = {};
  let hl = hand.length;
  while (hl--) {
    const hc = hand[hl];
    handMap[hc] = handMap[hc] + 1 || 1;
  }
  return resolveBoard(board, handMap);
}

function resolveBoard(board, hand) {
  const bl = board.length;
  if (bl === 0) {
    return 0;
  }
  let min = Infinity;
  let i = -1;
  while (++i < bl) {
    const bc = board[i];
    const hc = hand[bc] || 0;
    let j = i;
    while (board[++j] === bc) {}
    const sum = j - i;
    if (hc + sum < 3) {
      continue;
    }
    const used = sum >= 3 ? 0 : 3 - sum;
    hand[bc] -= used;
    const nextBoard = board.slice(0, i) + board.slice(j);
    const next = resolveBoard(nextBoard, hand);
    hand[bc] += used;
    if (next === -1) {
      continue;
    }
    min = Math.min(min, next + used);
  }
  return min === Infinity ? -1 : min;
}
