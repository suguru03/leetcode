'use strict';

module.exports = { minDiffInBST };

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
function minDiffInBST(root) {
  let min = Infinity;
  let prev = -Infinity;
  dfs(root);
  return min;

  function dfs(node) {
    if (!node) {
      return;
    }
    const { left, val, right } = node;
    dfs(left);
    min = Math.min(min, val - prev);
    prev = val;
    dfs(right);
  }
}
