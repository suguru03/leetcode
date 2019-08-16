'use strict';

module.exports = { consecutiveNumbersSum, consecutiveNumbersSum2 };

/**
 * https://leetcode.com/contest/weekly-contest-83/ranking from uwi-san
 * @param {number} N
 * @return {number}
 */
function consecutiveNumbersSum(N) {
  // a, a + d - 1
  // (2a + d - 1) / 2 * d = n
  const n = N * 2;
  let result = 0;
  for (let d = 1; d <= n; d++) {
    if (n % d !== 0) {
      continue;
    }
    if (check(d, n)) {
      result++;
    }
    if (Math.pow(d, 2) < n && check(n / d, n)) {
      result++;
    }
  }
  return result;
}

function check(d, n) {
  const u = n / d;
  const a = u - d + 1;
  return a % 2 === 0 && a > 0;
}

/**
 * https://leetcode.com/articles/consecutive-numbers-sum/
 * @param {number} N
 * @return {number}
 */
function consecutiveNumbersSum2(N) {
  while ((N & 1) === 0) {
    N >>= 1;
  }
  let result = 1;
  let d = 3;
  while (d * d <= N) {
    let e = 0;
    while (N % d === 0) {
      N /= d;
      e++;
    }
    result *= e + 1;
    d += 2;
  }
  if (N > 1) {
    result <<= 1;
  }
  return result;
}
