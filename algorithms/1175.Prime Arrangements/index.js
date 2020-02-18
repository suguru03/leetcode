'use strict';

module.exports = { numPrimeArrangements };

const mod = 1e9 + 7;

/**
 * @param {number} n
 * @return {number}
 */
function numPrimeArrangements(n) {
  const count = countPrimes(n + 1);
  let res = 1;
  for (let i = 1; i <= count; i++) {
    res = (res * i) % mod;
  }
  for (let i = 1; i <= n - count; i++) {
    res = (res * i) % mod;
  }
  return res;
}

/**
 * @param {number} n
 * @return {number}
 */
function countPrimes(n) {
  const nums = Array(n + 1);
  let count = n < 3 ? 0 : 1;
  for (let i = 3; i < n; i += 2) {
    if (nums[i]) {
      continue;
    }
    count++;
    for (let j = i * i; j < n; j += i) {
      nums[j] = true;
    }
  }
  return count;
}
