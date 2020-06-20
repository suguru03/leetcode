'use strict';

module.exports = { getPermutation };

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
function getPermutation(n, k) {
  let count = 0;
  const remaining = Array(n).fill(1);
  for (let i = 1; i < n; i++) {
    remaining[i] *= remaining[i - 1] * (i + 1);
  }
  return dfs(new Set());

  function dfs(cur) {
    if (cur.size === n) {
      if (++count === k) {
        return Array.from(cur).join('');
      }
      return null;
    }
    const rem = remaining[n - cur.size - 1];
    if (k > rem + count) {
      count += rem;
      return null;
    }
    for (let i = 1; i <= n; i++) {
      if (cur.has(i)) {
        continue;
      }
      cur.add(i);
      const str = dfs(cur);
      if (str) {
        return str;
      }
      cur.delete(i);
    }
    return null;
  }
}
