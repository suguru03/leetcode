'use strict';

module.exports = { postorderTraversal };

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
 * @return {number[]}
 */
function postorderTraversal(root) {
  const result = [];
  dfs(root);
  return result;

  function dfs(node) {
    if (!node) {
      return;
    }
    dfs(node.left);
    dfs(node.right);
    result.push(node.val);
  }
}
