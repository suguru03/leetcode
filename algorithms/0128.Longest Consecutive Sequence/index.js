'use strict';

module.exports = { longestConsecutive, longestConsecutive2 };

class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function longestConsecutive(nums) {
  const map = new Map();
  for (const num of nums) {
    if (map.has(num)) {
      continue;
    }
    const node = new Node(num);
    map.set(num, node);
    const prev = map.get(num - 1);
    if (prev) {
      [node.prev, prev.next] = [prev, node];
    }
    const next = map.get(num + 1);
    if (next) {
      [next.prev, node.next] = [node, next];
    }
  }
  let max = 0;
  for (let [num, node] of map) {
    if (node.prev) {
      continue;
    }
    let count = 0;
    while (map.has(num)) {
      count++;
      map.delete(num++);
    }
    max = Math.max(max, count);
  }
  return max;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function longestConsecutive2(nums) {
  let max = 0;
  const map = new Map();
  for (const num of nums) {
    if (map.has(num)) {
      continue;
    }
    const prev = map.get(num - 1) || 0;
    const next = map.get(num + 1) || 0;
    const cur = prev + next + 1;
    map.set(num, cur);
    map.set(num - prev, cur);
    map.set(num + next, cur);
    max = Math.max(max, cur);
  }
  return max;
}
