'use strict';

module.exports = { sortedSquares };

/**
 * @param {number[]} A
 * @return {number[]}
 */
function sortedSquares(A) {
  const result = Array(A.length);
  let index = A.length;
  let left = 0;
  let right = A.length - 1;
  while (--index >= 0) {
    const l = A[left] ** 2;
    const r = A[right] ** 2;
    if (l > r) {
      result[index] = l;
      left++;
    } else {
      result[index] = r;
      right--;
    }
  }
  return result;
}
