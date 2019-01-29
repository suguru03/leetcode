'use strict';

const { TreeNode } = require('../utils');

module.exports = { increasingBST };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val
 *   this.left = this.right = null
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function increasingBST(root) {
  if (!root) {
    return root;
  }
  const result = new TreeNode();
  let head = result;
  dfs(root);
  head.right = null;
  return result.right;

  function dfs(node) {
    if (!node) {
      return;
    }
    dfs(node.left);
    [node.left, head.right, head] = [null, node, node];
    dfs(node.right);
  }
}
