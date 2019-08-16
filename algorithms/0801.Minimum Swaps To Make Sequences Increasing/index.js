'use strict';

module.exports = { minSwap };

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
function minSwap(A, B) {
  let n1 = 0;
  let s1 = 1;
  for (let i = 1; i < A.length; i++) {
    const pa = A[i - 1];
    const pb = B[i - 1];
    const ca = A[i];
    const cb = B[i];
    let n2 = Infinity;
    let s2 = Infinity;
    if (pa < ca && pb < cb) {
      n2 = Math.min(n2, n1);
      s2 = Math.min(s2, s1 + 1);
    }
    if (pa < cb && pb < ca) {
      n2 = Math.min(n2, s1);
      s2 = Math.min(s2, n1 + 1);
    }
    n1 = n2;
    s1 = s2;
  }
  return Math.min(n1, s1);
}
