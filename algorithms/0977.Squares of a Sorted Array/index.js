'use strict';

module.exports = { sortedSquares };

/**
 * @param {number[]} A
 * @return {number[]}
 */
function sortedSquares(A) {
  A = A.map((num) => num ** 2);
  let l = 0;
  let r = A.length - 1;
  return Array.from(A, () => (A[l] < A[r] ? A[r--] : A[l++])).reverse();
}
