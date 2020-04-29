'use strict';

module.exports = { maxPathSum };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function maxPathSum(root) {
  let max = -Infinity;
  dfs(root);
  return max;

  function dfs(node) {
    if (!node) {
      return -Infinity;
    }
    const left = dfs(node.left);
    const right = dfs(node.right);
    const next = Math.max(node.val, node.val + left, node.val + right);
    max = Math.max(max, next, node.val + left + right);
    return next;
  }
}
