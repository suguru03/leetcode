'use strict';

module.exports = { maxSubarraySumCircular };

/**
 * @param {number[]} A
 * @return {number}
 */
function maxSubarraySumCircular(A) {
  let curMax = -Infinity;
  let curMin = Infinity;
  let sum = 0;
  let minSum = Infinity;
  let maxSum = -Infinity;
  for (const n of A) {
    sum += n;
    curMax = Math.max(curMax + n, n);
    maxSum = Math.max(maxSum, curMax);
    curMin = Math.min(curMin + n, n);
    minSum = Math.min(minSum, curMin);
  }
  return maxSum > 0 ? Math.max(maxSum, sum - minSum) : maxSum;
}
