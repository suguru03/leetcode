'use strict';

module.exports = { numsSameConsecDiff };

/**
 * @param {number} N
 * @param {number} K
 * @return {number[]}
 */
function numsSameConsecDiff(N, K) {
  const result = new Set();
  if (N === 1) {
    result.add(0);
  }
  const digit = Math.pow(10, N - 1);
  for (let i = 1; i <= 9; i++) {
    dfs(i * digit, digit);
  }
  return Array.from(result);

  function dfs(num, digit) {
    const next = (digit / 10) | 0;
    if (next === 0) {
      result.add(num);
      return;
    }
    const n = (num % (digit * 10)) / digit;
    const left = n - K;
    const right = n + K;
    if (left >= 0) {
      dfs(num + left * next, next);
    }
    if (right <= 9) {
      dfs(num + right * next, next);
    }
  }
}
