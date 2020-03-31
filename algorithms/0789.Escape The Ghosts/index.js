'use strict';

module.exports = { escapeGhosts };

/**
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 */
function escapeGhosts(ghosts, [tx, ty]) {
  const distance = getDistance(tx, ty);
  return ghosts.every(([x, y]) => distance < getDistance(tx - x, ty - y));
}

function getDistance(dx, dy) {
  return Math.abs(dx) + Math.abs(dy);
}
