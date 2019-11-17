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
  dfs(root, Infinity);
  return max;

  function dfs(node, prev) {
    if (!node) {
      return 0;
    }
    const { val, left, right } = node;
    const lv = dfs(left, val);
    const rv = dfs(right, val);
    max = Math.max(max, lv + rv);
    return prev === val ? Math.max(lv, rv) + 1 : 0;
  }
}
