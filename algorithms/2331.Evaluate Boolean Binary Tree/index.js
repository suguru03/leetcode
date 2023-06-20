'use strict';

module.exports = { evaluateTree };

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
 * @return {boolean}
 */
function evaluateTree(node) {
  switch (node?.val ?? 0) {
    case 0:
      return false;
    case 1:
      return true;
    case 2:
      return evaluateTree(node.left) || evaluateTree(node.right);
    case 3:
      return evaluateTree(node.left) && evaluateTree(node.right);
  }
}
