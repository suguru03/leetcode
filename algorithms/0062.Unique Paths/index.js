'use strict';

module.exports = { uniquePaths, uniquePaths2 };

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
function uniquePaths(m, n) {
  const dp = Array(n).fill(1);
  while (--m > 0) {
    for (let i = 1; i < n; i++) {
      dp[i] += dp[i - 1];
    }
  }
  return dp[n - 1];
}

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
function uniquePaths2(m, n) {
  return factorial(--m + --n) / (factorial(m) * factorial(n));
}

function factorial(n) {
  let sum = 1;
  while (n > 0) {
    sum *= n--;
  }
  return sum;
}
