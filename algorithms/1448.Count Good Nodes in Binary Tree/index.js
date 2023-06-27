'use strict';

module.exports = { goodNodes };

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
 * @return {number}
 */
function goodNodes(node, prev = -Infinity) {
  if (!node) {
    return 0;
  }
  const { val, left, right } = node;
  const next = Math.max(val, prev);
  return Number(val >= prev) + goodNodes(left, next) + goodNodes(right, next);
}
