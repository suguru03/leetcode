'use strict';

module.exports = { findLongestChain };

/**
 * @param {number[][]} pairs
 * @return {number}
 */
function findLongestChain(pairs) {
  let min = Infinity;
  let max = -Infinity;
  const map = new Map();
  for (const [from, to] of pairs) {
    min = Math.min(min, from);
    max = Math.max(max, to);
    map.set(to, Math.max(map.has(to) ? map.get(to) : -Infinity, from));
  }
  const dp = Array(max - min).fill(0);
  let i = min;
  while (i <= max) {
    const cur = i - min;
    if (!map.has(i)) {
      dp[cur] = dp[cur - 1] || 0;
    } else {
      const from = map.get(i) - min;
      dp[cur] = Math.max(dp[cur - 1] || 0, (dp[from - 1] || 0) + 1);
    }
    i++;
  }
  return dp[dp.length - 1];
}
