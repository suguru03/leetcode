'use strict';

const { TreeNode } = require('../utils');

module.exports = { insertIntoBST, insertIntoBST2 };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val
 *   this.left = this.right = null
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
function insertIntoBST(root, val) {
  const child = new TreeNode(val);
  if (root === null) {
    return child;
  }

  let node = root;
  while (node !== child) {
    if (val < node.val) {
      node.left ??= child;
      node = node.left;
    } else {
      node.right ??= child;
      node = node.right;
    }
  }
  return root;
}

function insertIntoBST2(root, val) {
  if (!root) {
    return new TreeNode(val);
  }
  if (val < root.val) {
    root.left = insertIntoBST(root.left, val);
  } else {
    root.right = insertIntoBST(root.right, val);
  }
  return root;
}
