'use strict';

module.exports = { buildTree };

const { TreeNode } = require('../util');

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
function buildTree(inorder, postorder) {
  if (postorder.length === 0) {
    return null;
  }
  const root = new TreeNode(postorder[postorder.length - 1]);
  const index = inorder.indexOf(root.val);
  root.left = buildTree(inorder.slice(0, index), postorder.slice(0, index));
  root.right = buildTree(inorder.slice(index + 1), postorder.slice(index, -1));
  return root;
}
