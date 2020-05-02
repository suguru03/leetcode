'use strict';

module.exports = { leftMostColumnWithOne };

/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} x, y
 *     @return {integer}
 *     this.get = function(x, y) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
function leftMostColumnWithOne(binaryMatrix) {
  const [m, n] = binaryMatrix.dimensions();
  let leftmost = n;
  for (let y = 0; y < m; y++) {
    let left = 0;
    let right = leftmost;
    while (left < right) {
      const x = ((left + right) / 2) | 0;
      if (binaryMatrix.get(y, x) === 1) {
        right = x;
      } else {
        left = x + 1;
      }
    }
    leftmost = left;
  }
  return leftmost === n ? -1 : leftmost;
}
