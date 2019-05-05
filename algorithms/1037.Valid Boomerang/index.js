'use strict';

module.exports = { isBoomerang };

/**
 * @param {number[][]} points
 * @return {boolean}
 */
function isBoomerang(points) {
  const [a, b, c] = points;
  const [ax, ay] = a;
  const [bx, by] = b;
  const [cx, cy] = c;
  return (by - ay) * (cx - bx) !== (bx - ax) * (cy - by);
}
