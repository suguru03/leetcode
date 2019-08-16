'use strict';

module.exports = { maxDepth };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function maxDepth(root) {
  return !root ? 0 : 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
