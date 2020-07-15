'use strict';

module.exports = { maxJumps, maxJumps2 };

/**
 * bottom up
 * @param {number[]} arr
 * @param {number} d
 * @return {number}
 */
function maxJumps(arr, d) {
  const list = arr.map((height, index) => ({ height, index })).sort((o1, o2) => o2.height - o1.height);
  const dp = Array(arr.length).fill(1);
  for (const { height, index } of list) {
    const count = dp[index] + 1;
    let i = index;
    let limit = Math.max(0, index - d);
    while (--i >= limit && arr[i] < height) {
      dp[i] = Math.max(dp[i], count);
    }
    i = index;
    limit = Math.min(arr.length, index + d + 1);
    while (++i < limit && arr[i] < height) {
      dp[i] = Math.max(dp[i], count);
    }
  }
  return Math.max(...dp);
}

/**
 * top down
 * @param {number[]} arr
 * @param {number} d
 * @return {number}
 */
function maxJumps2(arr, d) {
  const dp = Array(arr.length).fill(0);
  return Math.max(...dp.map((_, index) => dfs(index)));

  function dfs(index) {
    if (dp[index]) {
      return dp[index];
    }
    const height = arr[index];
    let i = index;
    let limit = Math.max(0, index - d);
    let count = 1;
    while (--i >= limit && arr[i] < height) {
      count = Math.max(count, dfs(i) + 1);
    }
    i = index;
    limit = Math.min(arr.length, index + d + 1);
    while (++i < limit && arr[i] < height) {
      count = Math.max(count, dfs(i) + 1);
    }
    dp[index] = count;
    return count;
  }
}
