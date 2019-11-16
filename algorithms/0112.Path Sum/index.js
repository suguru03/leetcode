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
 * @param {TreeNode} node
 * @param {number} sum
 * @return {boolean}
 */
function hasPathSum(node, sum) {
  if (!node) {
    return false;
  }
  const { left, right, val } = node;
  sum -= val;
  return (left === right && sum === 0) || hasPathSum(left, sum) || hasPathSum(right, sum);
}
