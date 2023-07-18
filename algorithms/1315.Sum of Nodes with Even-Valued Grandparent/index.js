'use strict';

module.exports = { sumEvenGrandparent };

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} node
 * @param {TreeNode} [parent]
 * @param {TreeNode} [grandparent]
 * @return {number}
 */
function sumEvenGrandparent(node, parent = null, grandparent = null) {
  if (!node) {
    return 0;
  }
  return (
    (grandparent?.val % 2 === 0 ? node.val : 0) +
    sumEvenGrandparent(node.left, node, parent) +
    sumEvenGrandparent(node.right, node, parent)
  );
}
