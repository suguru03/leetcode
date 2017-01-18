'use strict';

module.exports = { countPrimes };

/**
 * @param {number} n
 * @return {number}
 */
function countPrimes(n) {
  const nums = Array(n);
  let count = n < 3 ? 0 : 1;
  for (let i = 3; i < n; i += 2) {
    if (nums[i]) {
      continue;
    }
    count++;
    for (let j = i; j < n; j += i) {
      nums[j] = true;
    }
  }
  return count;
}
