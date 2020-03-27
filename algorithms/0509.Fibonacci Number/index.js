'use strict';

module.exports = { fib, fib2, fib3 };

const memo = new Map();

/**
 * Top down
 * @param {number} N
 * @return {number}
 */
function fib(N) {
  if (N <= 1) {
    return N;
  }
  if (!memo.has(N)) {
    memo.set(N, fib(N - 1) + fib(N - 2));
  }
  return memo.get(N);
}

/**
 * Bottom up
 * @param {number} N
 * @return {number}
 */
function fib2(N) {
  if (N <= 1) {
    return N;
  }
  let prev = 0;
  let current = 1;
  for (let i = 2; i <= N; i++) {
    [prev, current] = [current, current + prev];
  }
  return current;
}

const result = [
  0,
  1,
  1,
  2,
  3,
  5,
  8,
  13,
  21,
  34,
  55,
  89,
  144,
  233,
  377,
  610,
  987,
  1597,
  2584,
  4181,
  6765,
  10946,
  17711,
  28657,
  46368,
  75025,
  121393,
  196418,
  317811,
  514229,
  832040,
];

/**
 * Bottom up
 * @param {number} N
 * @return {number}
 */
function fib3(N) {
  return result[N];
}
