'use strict';

module.exports = { hasPathSum };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
function hasPathSum(root, sum) {
  if (!root) {
    return false;
  }
  sum -= root.val;
  if (sum === 0 && !root.left && !root.right) {
    return true;
  }
  return hasPathSum(root.left, sum) || hasPathSum(root.right, sum);
}
