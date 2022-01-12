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
  const target = new TreeNode(val);
  let node = root;
  while (node) {
    if (val < node.val) {
      if (!node.left) {
        node.left = target;
        break;
      }
      node = node.left;
    } else {
      if (!node.right) {
        node.right = target;
        break;
      }
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
