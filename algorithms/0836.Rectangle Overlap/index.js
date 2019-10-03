'use strict';

module.exports = { isRectangleOverlap };

/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
function isRectangleOverlap([x11, y11, x12, y12], [x21, y21, x22, y22]) {
  return x22 > x11 && y22 > y11 && x21 < x12 && y21 < y12;
}
