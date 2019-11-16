'use strict';

module.exports = { binaryTreePaths };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
function binaryTreePaths(root) {
  const paths = [];
  dfs(root, '');
  return paths;

  function dfs(node, cur) {
    if (!node) {
      return;
    }
    const { val, left, right } = node;
    cur = cur ? `${cur}->${val}` : val.toString();
    if (left === right) {
      paths.push(cur);
    }
    dfs(left, cur);
    dfs(right, cur);
  }
}
