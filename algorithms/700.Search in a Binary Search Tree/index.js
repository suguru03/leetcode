'use strict';

module.exports = { searchBST, searchBST2 };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val
 *   this.left = this.right = null
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} value
 * @return {TreeNode}
 */
function searchBST(root, val) {
  if (!root) {
    return null;
  }
  if (root.val === val) {
    return root;
  }
  return root.val > val ? searchBST(root.left, val) : searchBST(root.right, val);
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val
 *   this.left = this.right = null
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} value
 * @return {TreeNode}
 */
function searchBST2(root, val) {
  while (root && root.val !== val) {
    if (root.val > val) {
      root = root.left;
    } else {
      root = root.right;
    }
  }
  return root;
}
