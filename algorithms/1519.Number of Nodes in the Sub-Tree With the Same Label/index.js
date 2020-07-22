'use strict';

module.exports = { countSubTrees };

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} labels
 * @return {number[]}
 */
function countSubTrees(n, edges, labels) {
  const map = new Map();
  for (const [from, to] of edges) {
    map.set(from, map.get(from) || new Set());
    map.get(from).add(to);
    map.set(to, map.get(to) || new Set());
    map.get(to).add(from);
  }
  const queue = [0];
  const seen = new Set();
  while (queue.length) {
    const node = queue.shift();
    if (seen.has(node)) {
      continue;
    }
    seen.add(node);
    if (!map.has(node)) {
      continue;
    }
    queue.push(...map.get(node));
  }
  const stack = Array.from(seen);
  const countsMap = new Map();
  while (stack.length) {
    const node = stack.pop();
    const counts = Array(26).fill(0);
    counts[getIndex(node)]++;
    countsMap.set(node, counts);
    const children = map.get(node);
    if (!children) {
      continue;
    }
    for (const child of children) {
      if (!countsMap.has(child)) {
        continue;
      }
      for (const [index, count] of countsMap.get(child).entries()) {
        counts[index] += count;
      }
    }
  }
  return Array.from({ length: n }, (_, index) => countsMap.get(index)[getIndex(index)]);

  function getIndex(index) {
    return labels.charCodeAt(index) - 97;
  }
}
