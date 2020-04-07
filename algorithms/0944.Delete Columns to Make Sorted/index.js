'use strict';

module.exports = { minDeletionSize };

/**
 * @param {string[]} A
 * @return {number}
 */
function minDeletionSize(A) {
  const size = A[0].length;
  let result = 0;
  for (let c = 0; c < size; c++) {
    for (let r = 1; r < A.length; r++) {
      if (A[r][c] >= A[r - 1][c]) {
        continue;
      }
      result++;
      break;
    }
  }
  return result;
}
