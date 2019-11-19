'use strict';

module.exports = { isBoomerang };

/**
 * @param {number[][]} points
 * @return {boolean}
 */
function isBoomerang(points) {
  const [[ax, ay], [bx, by], [cx, cy]] = points;
  return (by - ay) * (cx - bx) !== (bx - ax) * (cy - by);
}
