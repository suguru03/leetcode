'use strict';

module.exports = { pruneTree };

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
 * @return {TreeNode}
 */
function pruneTree(root) {
  return dfs(root) ? null : root;

  function dfs(node) {
    if (!node) {
      return true;
    }
    if (dfs(node.left)) {
      node.left = null;
    }
    if (dfs(node.right)) {
      node.right = null;
    }
    return node.val === 0 && node.left === node.right;
  }
}
