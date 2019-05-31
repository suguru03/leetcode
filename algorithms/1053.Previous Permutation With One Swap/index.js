'use strict';

module.exports = { prevPermOpt1 };

/**
 * @param {number[]} A
 * @return {number[]}
 */
function prevPermOpt1(A) {
  const n = A.length;
  let l = n - 2;
  while (A[l] <= A[l + 1] && l--) {}
  if (l < 0) {
    return A;
  }
  let r = n - 1;
  while (A[l] <= A[r] && --r) {}
  while (A[r - 1] === A[r] && --r) {}
  [A[r], A[l]] = [A[l], A[r]];
  return A;
}
