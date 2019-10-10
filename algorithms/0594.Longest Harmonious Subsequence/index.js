'use strict';

module.exports = { findLHS, findLHS2, findLHS3 };

/**
 * @param {number[]} nums
 * @return {number}
 */
function findLHS(nums) {
  let max = 0;
  const map = new Map();
  for (const n of nums) {
    const count = map.has(n) ? map.get(n) + 1 : 1;
    const prev = map.get(n - 1);
    const next = map.get(n + 1);
    if (prev) {
      max = Math.max(max, prev + count);
    }
    if (next) {
      max = Math.max(max, next + count);
    }
    map.set(n, count);
  }
  return max;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function findLHS2(nums) {
  const map = new Map();
  for (const n of nums) {
    const s = map.has(n) ? map.get(n) : 0;
    map.set(n, s + 1);
  }
  let max = 0;
  for (const n of map.keys()) {
    if (map.has(n + 1)) {
      max = Math.max(max, map.get(n + 1) + map.get(n));
    }
  }
  return max;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function findLHS3(nums) {
  const map = new Map();
  let l = nums.length;
  while (l--) {
    const n = nums[l];
    map.set(n, (map.get(n) || 0) + 1);
  }
  let max = 0;
  for (const n of map.keys()) {
    const s = map.get(n + 1);
    if (s) {
      max = Math.max(max, s + map.get(n));
    }
  }
  return max;
}
