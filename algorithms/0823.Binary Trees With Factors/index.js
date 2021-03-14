'use strict';

module.exports = { numFactoredBinaryTrees };

/**
 * @param {number[]} arr
 * @return {number}
 */
function numFactoredBinaryTrees(arr) {
  arr.sort((n1, n2) => n1 - n2);
  const map = new Map(arr.map((n, i) => [n, i]));
  const counts = Array(arr.length).fill(0);
  const mod = 1e9 + 7;
  for (const [i, n] of arr.entries()) {
    counts[i] += 1;
    for (let j = 0; j < i; j++) {
      const n1 = arr[j];
      const n2 = n / n1;
      if (!map.has(n1) || !map.has(n2)) {
        continue;
      }
      counts[i] += counts[j] * counts[map.get(n2)];
      counts[i] %= mod;
    }
  }
  return counts.reduce((sum, count) => (sum + count) % mod);
}
