'use strict';

module.exports = { escapeGhosts };

/**
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 */
function escapeGhosts(ghosts, target) {
  const distance = getDistance([0, 0], target);
  return ghosts.every(ghost => distance < getDistance(ghost, target));
}

function getDistance([x1, y1], [x2, y2]) {
  return Math.abs(x2 - x1) + Math.abs(y2 - y1);
}
