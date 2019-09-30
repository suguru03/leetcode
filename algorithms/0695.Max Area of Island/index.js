'use strict';

module.exports = { maxAreaOfIsland, maxAreaOfIsland2 };

/**
 * @param {number[][]} grid
 * @return {number}
 */
function maxAreaOfIsland(grid) {
  const lr = grid.length;
  const lc = lr ? grid[0].length : 0;
  let max = 0;
  for (let r = 0; r < lr; r++) {
    for (let c = 0; c < lc; c++) {
      if (grid[r][c] === 0) {
        continue;
      }
      max = Math.max(max, dfs(r, c));
    }
  }
  return max;

  function dfs(r, c) {
    // if (r < 0 || r >= lr || c < 0 || c >= lc || grid[r][c] === 0) {
    if (!grid[r] || !grid[r][c]) {
      return 0;
    }
    grid[r][c] = 0;
    return dfs(r - 1, c) + dfs(r + 1, c) + dfs(r, c - 1) + dfs(r, c + 1) + 1;
  }
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
function maxAreaOfIsland2(grid) {
  let max = 0;
  for (const [r, row] of grid.entries()) {
    for (const c of row.keys()) {
      max = Math.max(max, dfs(r, c));
    }
  }
  return max;

  function dfs(r, c) {
    if (!grid[r] || !grid[r][c]) {
      return 0;
    }
    grid[r][c] = 0;
    return dfs(r - 1, c) + dfs(r + 1, c) + dfs(r, c - 1) + dfs(r, c + 1) + 1;
  }
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
function maxAreaOfIsland3(grid) {
  const lr = grid.length;
  const lc = lr ? grid[0].length : 0;
  let max = 0;
  let key = 0;
  const memo = Array(lc);
  const countMap = new Map();
  for (let r = 0; r < lr; r++) {
    for (let c = 0; c < lc; c++) {
      if (grid[r][c] === 0) {
        memo[c] = null;
        continue;
      }
      const prev = memo[c - 1];
      const next = memo[c];
      let k;
      let count = 0;
      if (prev) {
        if (!next) {
          k = prev.key;
          memo[c] = prev;
          count = countMap.get(k) + 1;
          countMap.set(k, count);
        } else if (prev.key === next.key) {
          k = prev.key;
          count = countMap.get(k) + 1;
          countMap.set(k, count);
        } else {
          k = prev.key;
          count = countMap.get(prev.key) + countMap.get(next.key) + 1;
          countMap.set(next.key, 0);
          // TODO: 😫
          for (let i = 0; i < memo.length; i++) {
            if (memo[i] === next) {
              memo[i] = prev;
            }
          }
          countMap.set(k, count);
        }
      } else {
        memo[c] = memo[c] || { key: ++key };
        k = memo[c].key;
        count = countMap.get(k) || 0;
        countMap.set(k, ++count);
      }
      max = Math.max(max, count);
    }
  }
  return max;
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
function maxAreaOfIsland4(grid) {
  const lr = grid.length;
  const lc = lr ? grid[0].length : 0;
  let max = 0;
  const memo = Array(lc);
  const countMap = new Map();
  // TODO: 😫
  function getCount(set, seen = new Set()) {
    if (seen.has(set)) {
      return 0;
    }
    seen.add(set);
    let count = countMap.get(set);
    for (const s of set) {
      count += getCount(s, seen);
    }
    return count;
  }
  for (let r = 0; r < lr; r++) {
    for (let c = 0; c < lc; c++) {
      if (grid[r][c] === 0) {
        memo[c] = null;
        continue;
      }
      const prev = memo[c - 1];
      let count = 0;
      if (prev) {
        if (memo[c]) {
          memo[c].add(prev);
          prev.add(memo[c]);
          count = countMap.get(memo[c]) + 1;
          countMap.set(memo[c], count);
        } else {
          memo[c] = new Set([prev]);
          prev.add(memo[c]);
          countMap.set(memo[c], 1);
        }
      } else {
        memo[c] = memo[c] || new Set();
        count = countMap.get(memo[c]) || 0;
        countMap.set(memo[c], ++count);
      }
      max = Math.max(max, getCount(memo[c]));
    }
  }
  return max;
}
