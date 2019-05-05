'use strict';

module.exports = { bstToGst };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val
 *     this.left = this.right = null
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function bstToGst(root) {
  let sum = 0;
  dfs(root);
  return root;

  function dfs(node) {
    if (!node) {
      return;
    }
    const { left, right, val } = node;
    dfs(right);
    sum += val;
    node.val = sum;
    dfs(left);
  }
}
