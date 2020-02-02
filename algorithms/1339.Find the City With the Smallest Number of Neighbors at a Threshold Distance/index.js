'use strict';

module.exports = { findTheCity };

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
function findTheCity(n, edges, distanceThreshold) {
  const dp = Array.from({ length: n }, () => Array(n).fill(Infinity));
  for (const [from, to, cost] of edges) {
    dp[from][to] = cost;
    dp[to][from] = cost;
  }
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      if (i === k) {
        continue;
      }
      for (let j = 0; j < n; j++) {
        if (i === j) {
          continue;
        }
        dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k][j]);
      }
    }
  }
  let index = -1;
  let smallest = Infinity;
  for (let i = n - 1; i >= 0; i--) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (dp[i][j] <= distanceThreshold) {
        count++;
      }
    }
    if (count < smallest) {
      index = i;
      smallest = count;
    }
  }
  return index;
}
