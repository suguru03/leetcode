'use strict';

const { TreeNode } = require('../util');

module.exports = { deleteNode };

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
function deleteNode(root, key) {
  if (!root) {
    return null;
  }
  if (root.val > key) {
    root.left = deleteNode(root.left, key);
    return root;
  }
  if (root.val < key) {
    root.right = deleteNode(root.right, key);
    return root;
  }
  if (!root.left) {
    return root.right;
  }
  if (!root.right) {
    return root.left;
  }
  let node = root.right;
  while (node.left) {
    node = node.left;
  }
  root.val = node.val;
  root.right = deleteNode(root.right, root.val);
  return root;
}
