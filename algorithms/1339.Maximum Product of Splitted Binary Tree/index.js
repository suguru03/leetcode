'use strict';

module.exports = { maxProduct };

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
function maxProduct(root) {
  const total = sum(root);
  let max = 0;
  dfs(root);
  const mod = 1e9 + 7;
  return max % mod;

  function sum(node) {
    return !node ? 0 : sum(node.left) + sum(node.right) + node.val;
  }

  function dfs(node) {
    if (!node) {
      return 0;
    }
    const sum = dfs(node.left) + dfs(node.right) + node.val;
    max = Math.max(max, sum * (total - sum));
    return sum;
  }
}
