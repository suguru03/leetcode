'use strict';

module.exports = { getAllElements };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val
 *     this.left = this.right = null
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
function getAllElements(root1, root2) {
  const result = [];
  dfs(root1);
  dfs(root2);
  return result.sort((n1, n2) => n1 - n2);
  function dfs(node) {
    if (!node) {
      return;
    }
    const { val, left, right } = node;
    dfs(left);
    result.push(val);
    dfs(right);
  }
}
