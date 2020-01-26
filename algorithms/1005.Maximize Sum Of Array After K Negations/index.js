'use strict';

module.exports = { largestSumAfterKNegations };

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
function largestSumAfterKNegations(A, K) {
  A.sort((n1, n2) => n1 - n2);
  let i = -1;
  while (++i < K && A[i] < 0) {
    A[i] *= -1;
  }
  const index = A[i - 1] < A[i] ? i - 1 : i;
  A[index] *= (K - i) % 2 ? -1 : 1;
  return A.reduce((sum, n) => sum + n);
}
