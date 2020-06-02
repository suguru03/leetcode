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
 * @param {TreeNode} node
 * @return {TreeNode}
 */
function invertTree(node) {
  if (!node) {
    return null;
  }
  [node.right, node.left] = [invertTree(node.left), invertTree(node.right)];
  return node;
}
