'use strict';

module.exports = { largestDivisibleSubset };

class Node {
  constructor(val) {
    this.val = val;
    this.children = new Set();
  }
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function largestDivisibleSubset(nums) {
  nums.sort((n1, n2) => n1 - n2);
  let max = 0;
  let maxRoot = null;
  const roots = [];
  const depthMap = new Map();
  loop: for (const num of nums) {
    const node = new Node(num);
    let found = false;
    for (const root of roots) {
      const depth = dfs(root, node);
      if (!depth) {
        continue;
      }
      found = true;
      depthMap.set(root, depth);
      if (depth > max) {
        max = depth;
        maxRoot = root;
      }
    }
    if (found) {
      continue;
    }
    roots.push(node);
    depthMap.set(node, 1);
    max = max || 1;
    maxRoot = maxRoot || node;
  }
  return getResult(maxRoot, max);

  function dfs(node, target) {
    if (!node) {
      return 0;
    }
    if (target.val % node.val !== 0) {
      return 0;
    }
    let max = 0;
    for (const child of node.children) {
      if (child === target) {
        continue;
      }
      const depth = dfs(child, target);
      if (depth) {
        max = Math.max(max, depth + 1);
      }
    }
    if (max) {
      return max;
    }
    node.children.add(target);
    return 2;
  }

  function getResult(node, depth) {
    if (depth-- === 0) {
      return [];
    }
    if (!node) {
      return null;
    }
    const { val, children } = node;
    for (const child of children) {
      const result = getResult(child, depth);
      if (result) {
        result.unshift(val);
        return result;
      }
    }
    return depth === 0 ? [val] : null;
  }
}
