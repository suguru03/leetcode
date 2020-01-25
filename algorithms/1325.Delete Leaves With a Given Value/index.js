'use strict';

module.exports = { removeLeafNodes };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val
 *     this.left = this.right = null
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {TreeNode}
 */
function removeLeafNodes(root, target) {
  if (!root) {
    return null;
  }
  root.left = removeLeafNodes(root.left, target);
  root.right = removeLeafNodes(root.right, target);
  return root.left === root.right && root.val === target ? null : root;
}
