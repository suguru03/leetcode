'use strict';

module.exports = { countVowelPermutation };

/**
 * @param {number} n
 * @return {number}
 */
function countVowelPermutation(n) {
  let prev = [1, 1, 1, 1, 1];
  const mod = 1e9 + 7;
  while (--n) {
    const [a, e, i, o, u] = prev;
    prev = [e, (a + i) % mod, (a + e + o + u) % mod, (i + u) % mod, a];
  }
  return prev.reduce((sum, n) => (sum + n) % mod);
}
