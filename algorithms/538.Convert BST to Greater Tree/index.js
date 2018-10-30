'use strict';

module.exports = { convertBST, convertBST2 };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *  this.val = val
 *  this.left = this.right = null
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function convertBST(root) {
  dfs(root, 0, null);
  return root;
}

function dfs(node, val, root) {
  if (!node) {
    return root ? root.val : 0;
  }
  node.val += dfs(node.right, val, root);
  return dfs(node.left, node.val, node);
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function convertBST2(root) {
  dfs2(root, 0);
  return root;
}

function dfs2(node, sum) {
  if (!node) {
    return sum;
  }
  node.val += dfs2(node.right, sum);
  return dfs2(node.left, node.val);
}
