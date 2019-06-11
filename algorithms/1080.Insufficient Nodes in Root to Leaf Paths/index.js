'use strict';

module.exports = { sufficientSubset };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val
 *     this.left = this.right = null
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} limit
 * @return {TreeNode}
 */
function sufficientSubset(root, limit) {
  if (!dfs(root, 0)) {
    return null;
  }
  return root;

  function dfs(node, sum) {
    if (!node) {
      return sum >= limit;
    }
    const { val, left, right } = node;
    sum += val;
    const l = dfs(left, sum);
    const r = dfs(right, sum);
    if (!l) {
      node.left = null;
    }
    if (!r) {
      node.right = null;
    }
    return l || r;
  }
}
