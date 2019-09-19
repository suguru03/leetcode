'use strict';

module.exports = { longestUnivaluePath };

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
function longestUnivaluePath(root) {
  let max = 0;
  dfs(root);
  return max;
  function dfs(node, cur) {
    if (!node) {
      return 0;
    }
    const { val, left, right } = node;
    const l = dfs(left, val);
    const r = dfs(right, val);
    max = Math.max(max, l + r);
    return val === cur ? Math.max(l, r) + 1 : 0;
  }
}
