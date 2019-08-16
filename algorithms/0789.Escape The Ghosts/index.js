'use strict';

module.exports = { escapeGhosts };

/**
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 */
function escapeGhosts(ghosts, target) {
  const size = getSize([0, 0], target);
  for (const g of ghosts) {
    const s = getSize(g, target);
    if (s <= size) {
      return false;
    }
  }
  return true;
}

function getSize([x0, y0], [x1, y1]) {
  return Math.abs(x1 - x0) + Math.abs(y1 - y0);
}
