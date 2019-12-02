'use strict';

module.exports = { minTimeToVisitAllPoints };

/**
 * @param {number[][]} points
 * @return {number}
 */
function minTimeToVisitAllPoints(points) {
  let sec = 0;
  for (const [index, [x1, y1]] of points.slice(1).entries()) {
    const [x0, y0] = points[index];
    sec += Math.max(Math.abs(x1 - x0), Math.abs(y0 - y1));
  }
  return sec;
}
