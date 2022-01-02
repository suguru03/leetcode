'use strict';

module.exports = { rob };

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
 * @return {number}
 */
function rob(root) {
  const [max] = dfs(root);
  return max;

  function dfs(node) {
    if (!node) {
      return [0, 0];
    }
    const left = dfs(node.left);
    const right = dfs(node.right);
    const skipped = left[0] + right[0];
    const taken = node.val + left[1] + right[1];
    return [Math.max(skipped, taken), skipped];
  }
}
