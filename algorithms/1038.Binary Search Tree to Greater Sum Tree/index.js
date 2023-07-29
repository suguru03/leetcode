'use strict';

module.exports = { bstToGst };

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function bstToGst(root) {
  let prev = 0;
  dfs(root);
  return root;
  function dfs(node) {
    if (!node) {
      return;
    }
    dfs(node.right);
    node.val += prev;
    prev = node.val;
    dfs(node.left);
  }
}
