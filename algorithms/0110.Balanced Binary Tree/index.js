'use strict';

module.exports = { isBalanced };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isBalanced(root) {
  if (!root) {
    return true;
  }
  const left = depth(root.left);
  const right = depth(root.right);
  return Math.abs(left - right) <= 1 && isBalanced(root.left) && isBalanced(root.right);
}

function depth(node) {
  return !node ? 0 : Math.max(depth(node.left), depth(node.right)) + 1;
}
