'use strict';

module.exports = { maxLevelSum, maxLevelSum2 };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val
 *     this.left = this.right = null
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function maxLevelSum(root) {
  const sums = [];
  dfs(root, 0);
  const max = Math.max(...sums);
  return sums.indexOf(max) + 1;
  function dfs(node, depth) {
    if (!node) {
      return;
    }
    sums[depth] = ~~sums[depth] || 0;
    sums[depth++] += node.val;
    dfs(node.left, depth);
    dfs(node.right, depth);
  }
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val
 *     this.left = this.right = null
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function maxLevelSum2(root) {
  let max = 0;
  let depth = 0;
  let index = 0;
  const queue = [root];
  while (queue.length) {
    depth++;
    let sum = 0;
    let size = queue.length;
    while (size--) {
      const node = queue.shift();
      if (!node) {
        continue;
      }
      sum += node.val;
      queue.push(node.left, node.right);
    }
    if (sum < max) {
      continue;
    }
    max = sum;
    index = depth;
  }
  return index;
}
