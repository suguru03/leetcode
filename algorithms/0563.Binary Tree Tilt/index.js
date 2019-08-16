'use strict';

module.exports = { findTilt };

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
function findTilt(root) {
  let sum = 0;
  dfs(root);
  return sum;
  function dfs(node) {
    if (!node) {
      return 0;
    }
    const { val, left, right } = node;
    const l = dfs(left);
    const r = dfs(right);
    sum += Math.abs(l - r);
    return val + l + r;
  }
}
