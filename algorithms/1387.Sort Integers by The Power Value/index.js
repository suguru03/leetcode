'use strict';

module.exports = { getKth };

/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
function getKth(lo, hi, k) {
  const memo = Array(1001).fill(0);
  memo[1] = 1;
  const result = [];
  for (let i = lo; i <= hi; i++) {
    result.push({ i, count: dfs(i) });
  }
  result.sort((o1, o2) => o1.count - o2.count || o1.i - o2.i);
  return result[k - 1].i;

  function dfs(x) {
    if (memo[x]) {
      return memo[x];
    }
    memo[x] = dfs(x % 2 ? 3 * x + 1 : x / 2) + 1;
    return memo[x];
  }
}
