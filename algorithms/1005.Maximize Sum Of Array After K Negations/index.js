'use strict';

module.exports = { largestSumAfterKNegations, largestSumAfterKNegations2 };

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

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
function largestSumAfterKNegations2(A, K) {
  const offset = 100;
  const arr = Array(2 * offset + 1).fill(0);
  for (const n of A) {
    arr[n + offset]++;
  }
  let i = 0;
  while (i < offset && K > 0) {
    if (arr[i] === 0) {
      i++;
      continue;
    }
    K--;
    arr[i]--;
    arr[2 * offset - i]++;
  }
  if (K % 2) {
    const index = arr.slice(offset).findIndex(count => count > 0);
    arr[index + offset]--;
    arr[offset - index]++;
  }
  return arr.reduce((sum, count, i) => sum + (i - offset) * count, 0);
}
