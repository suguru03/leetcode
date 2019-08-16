'use strict';

module.exports = { minDeletionSize };

/**
 * @param {string[]} A
 * @return {number}
 */
function minDeletionSize(A) {
  let c = 0;
  for (let i = 0; i < A[0].length; i++) {
    for (let j = 1; j < A.length; j++) {
      if (A[j][i] < A[j - 1][i]) {
        c++;
        break;
      }
    }
  }
  return c;
}
