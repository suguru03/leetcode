'use strict';

module.exports = { findSolution };

/**
 * // This is the CustomFunction's API interface.
 * // You should not implement it, or speculate about its implementation
 * function CustomFunction() {
 *
 *     @param {integer, integer} x, y
 *     @return {integer}
 *     this.f = function(x, y) {
 *         ...
 *     }
 *
 * }
 */
/**
 * @param {CustomFunction} customfunction
 * @param {integer} z
 * @return {integer[][]}
 */
function findSolution(customfunction, z) {
  let x = 1;
  let y = 1000;
  const result = [];
  while (x <= 1000 && y >= 1) {
    const res = customfunction.f(x, y);
    if (res === z) {
      result.push([x++, y--]);
    } else if (res < z) {
      x++;
    } else {
      y--;
    }
  }
  return result;
}
