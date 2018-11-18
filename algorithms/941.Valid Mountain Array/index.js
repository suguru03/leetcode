'use strict';

module.exports = { validMountainArray };

/**
 * @param {number[]} A
 * @return {boolean}
 */
function validMountainArray(A) {
  const size = A.length;
  if (size < 3) {
    return false;
  }
  let l = -1;
  let r = size;
  while (++l < size && A[l] < A[l + 1]) {}
  while (--r > 0 && A[r - 1] > A[r]) {}
  return l === r && l !== 0 && l !== size - 1;
}
