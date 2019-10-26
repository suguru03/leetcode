'use strict';

module.exports = { checkStraightLine };

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
function checkStraightLine(coordinates) {
  const [[x0, y0], [x1, y1], ...rest] = coordinates;
  const dx = x1 - x0;
  const dy = y1 - y0;
  for (const [xi, yi] of rest) {
    const dxi = xi - x0;
    const dyi = yi - y0;
    if (dxi * dy !== dyi * dx) {
      return false;
    }
  }
  return true;
}
