'use strict';

module.exports = { trimBST };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val
 *   this.left = this.right = null
 * }
 */
/**
 * @param {TreeNode} node
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
function trimBST(node, L, R) {
  if (!node) {
    return null;
  }
  const { val, left, right } = node;
  const tl = trimBST(left, L, R);
  const tr = trimBST(right, L, R);
  if (val < L || val > R) {
    return tl || tr;
  }
  node.left = tl;
  node.right = tr;
  return node;
}
