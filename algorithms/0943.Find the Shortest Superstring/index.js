'use strict';

module.exports = { shortestSuperstring };

/**
 * @param {string[]} A
 * @return {string}
 */
function shortestSuperstring(A) {
  const n = A.length;
  const scores = [];
  for (let i = 0; i < n; i++) {
    const s1 = A[i];
    for (let j = 0; j < n; j++) {
      if (i === j) {
        continue;
      }
      const s2 = A[j];
      let k = Math.min(s1.length, s2.length);
      while (k--) {
        if (s1.endsWith(s2.substr(0, k))) {
          scores[i] = scores[i] || [];
          scores[i][j] = k;
          break;
        }
      }
    }
  }

  const size = 1 << n;
  const dp = Array(size);
  const parent = Array(size);
  for (let mask = 1; mask < size; mask++) {
    for (let i = 0; i < n; i++) {
      const bit = 1 << i;
      if ((mask & bit) <= 0) {
        continue;
      }
      if (mask === bit) {
        dp[mask] = [];
        dp[mask][i] = 0;
        parent[mask] = [];
      }
      if (mask <= bit) {
        break;
      }
      const row = dp[mask - bit];
      dp[mask] = dp[mask] || [];
      dp[mask][i] = -1;
      parent[mask] = parent[mask] || [];
      for (let j = 0; j < n; j++) {
        if (i === j) {
          continue;
        }
        if (row[j] === undefined) {
          continue;
        }
        const score = row[j] + scores[j][i];
        if (score > dp[mask][i]) {
          dp[mask][i] = score;
          parent[mask][i] = j;
        }
      }
    }
  }
  let row = dp[size - 1];
  let index = 0;
  for (let i = 1; i < n; i++) {
    const score = row[i];
    if (score > row[index]) {
      index = i;
    }
  }

  let str = A[index];
  let rowIndex = size - 1;
  let count = n;
  while (--count) {
    const row = parent[rowIndex];
    let score = dp[rowIndex][index];
    rowIndex -= 1 << index;
    index = row[index];
    score -= dp[rowIndex][index];
    const s = A[index];
    str = s.slice(0, s.length - score) + str;
  }
  return str;
}
