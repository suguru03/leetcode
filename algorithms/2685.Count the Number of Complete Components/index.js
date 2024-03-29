'use strict';

module.exports = { countCompleteComponents, countCompleteComponents2 };

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
function countCompleteComponents(n, edges) {
  const map = new Map();
  for (const pair of edges) {
    for (const [i, x] of pair.entries()) {
      const y = pair[(i + 1) % pair.length];
      const list = map.get(x) ?? Array(n).fill(0);
      list[x] = 1;
      list[y] = 1;
      map.set(x, list);
    }
  }

  let count = 0;
  const seen = new Set();
  for (let x = 0; x < n; x++) {
    if (seen.has(x)) {
      continue;
    }
    if (!map.has(x)) {
      count++;
      continue;
    }

    const list = map.get(x);
    const target = list.join('');
    let valid = 1;
    for (const [y, flag] of list.entries()) {
      if (flag === 0) {
        continue;
      }

      valid &= map.get(y).join('') === target;
      seen.add(y);
    }
    count += valid;
  }

  return count;
}

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
function countCompleteComponents2(n, edges) {
  const map = new Map();
  for (const pair of edges) {
    for (const [i, x] of pair.entries()) {
      const y = pair[(i + 1) % pair.length];
      const set = map.get(x) ?? new Set();
      set.add(x);
      set.add(y);
      map.set(x, set);
    }
  }

  let count = 0;
  const seen = new Set();
  for (let x = 0; x < n; x++) {
    if (seen.has(x)) {
      continue;
    }
    if (!map.has(x)) {
      count++;
      continue;
    }

    const nums = map.get(x);
    if (isComplete(x, nums, new Set())) {
      count++;
    }

    for (const num of nums) {
      seen.add(num);
    }
  }

  return count;

  function isComplete(cur, prev, memo) {
    if (memo.has(cur)) {
      return true;
    }
    memo.add(cur);
    const next = map.get(cur);
    if (prev.size !== next.size) {
      return false;
    }
    for (const num of next) {
      if (!prev.has(num) || !isComplete(num, next, memo)) {
        return false;
      }
    }

    return true;
  }
}
