'use strict';

module.exports = { kthSmallest };

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
function kthSmallest(root, k) {
  return dfs(root);
  function dfs(node) {
    if (!node) {
      return null;
    }
    const left = dfs(node.left);
    if (left !== null) {
      return left;
    }
    if (--k === 0) {
      return node.val;
    }
    return dfs(node.right);
  }
}
