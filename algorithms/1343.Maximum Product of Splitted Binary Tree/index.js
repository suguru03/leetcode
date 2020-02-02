'use strict';

module.exports = { maxProduct, maxProduct2 };

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
  const total = count(root);
  let max = 0;
  dfs(root);
  const mod = 1e9 + 7;
  return max % mod;

  function count(node) {
    return !node ? 0 : count(node.left) + count(node.right) + node.val;
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

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @see https://leetcode.com/problems/maximum-product-of-splitted-binary-tree/discuss/496687/Java-concise-One-pass-DFS-Soution
 * @param {TreeNode} root
 * @return {number}
 */
function maxProduct2(root) {
  const sumSet = new Set();
  const total = dfs(root);
  const mod = 1e9 + 7;
  return Math.max(...Array.from(sumSet).map(sum => sum * (total - sum))) % mod;

  function dfs(node) {
    if (!node) {
      return 0;
    }
    const sum = dfs(node.left) + dfs(node.right) + node.val;
    sumSet.add(sum);
    return sum;
  }
}
