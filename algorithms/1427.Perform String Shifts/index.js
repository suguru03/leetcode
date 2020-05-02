'use strict';

module.exports = { stringShift };

/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
function stringShift(s, shift) {
  const count = shift.reduce((sum, [direction, amount]) => sum + (direction === 0 ? amount : -amount), 0) % s.length;
  return s.slice(count) + s.slice(0, count);
}
