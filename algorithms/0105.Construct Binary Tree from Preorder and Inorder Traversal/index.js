'use strict';

module.exports = { buildTree };

const { TreeNode } = require('../util');

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *   this.val = (val===undefined ? 0 : val)
 *   this.left = (left===undefined ? null : left)
 *   this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function buildTree(preorder, inorder) {
  if (preorder.length === 0) {
    return null;
  }
  const node = new TreeNode(preorder.shift());
  const index = inorder.indexOf(node.val);
  node.left = buildTree(preorder.slice(0, index), inorder.slice(0, index));
  node.right = buildTree(preorder.slice(index), inorder.slice(index + 1));
  return node;
}
