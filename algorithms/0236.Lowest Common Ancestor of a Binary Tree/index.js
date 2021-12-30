'use strict';

module.exports = { lowestCommonAncestor };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val
 *   this.left = this.right = null
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function lowestCommonAncestor(root, p, q) {
  let result = null;
  dfs(root);
  return result;

  function dfs(node) {
    if (!node || result) {
      return 0;
    }
    const l = dfs(node.left);
    const r = dfs(node.right);
    const cur = Number(node.val === p.val || node.val === q.val);
    const sum = l + r + cur;
    if (sum === 2) {
      result ??= node;
    }
    return sum;
  }
}
