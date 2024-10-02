'use strict';

module.exports = { canArrange };

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
function canArrange(arr, k) {
  const memo = Array(k).fill(0);
  for (const n of arr) {
    const pair = (k - (n % k)) % k;
    if (memo[pair] > 0) {
      memo[pair]--;
      continue;
    }

    memo[(k - pair) % k]++;
  }

  return memo.every((n) => n === 0);
}
