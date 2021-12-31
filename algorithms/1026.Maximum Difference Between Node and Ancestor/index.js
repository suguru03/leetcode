'use strict';

module.exports = { maxAncestorDiff };

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *   this.val = (val===undefined ? 0 : val)
 *   this.left = (left===undefined ? null : left)
 *   this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function maxAncestorDiff(root) {
  if (!root) {
    return 0;
  }
  return dfs(root, root.val, root.val);

  function dfs(node, min, max) {
    if (!node) {
      return 0;
    }
    min = Math.min(min, node.val);
    max = Math.max(max, node.val);
    return Math.max(max - min, dfs(node.left, min, max), dfs(node.right, min, max));
  }
}
