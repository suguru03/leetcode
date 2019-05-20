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
  const { left, right, val } = root;
  sum -= val;
  return (!left && !right && sum === 0) || hasPathSum(left, sum) || hasPathSum(right, sum);
}
