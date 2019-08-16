'use strict';

module.exports = { invertTree };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function invertTree(root) {
  if (!root) {
    return null;
  }
  const { right, left } = root;
  root.left = invertTree(right);
  root.right = invertTree(left);
  return root;
}
