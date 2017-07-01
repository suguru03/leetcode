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
  return getDepth(root, 0);
}

function getDepth(node, depth) {
  if (!node) {
    return depth;
  }
  ++depth;
  return Math.max(getDepth(node.left, depth), getDepth(node.right, depth));
}
