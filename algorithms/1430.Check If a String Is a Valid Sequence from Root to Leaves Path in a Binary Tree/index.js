'use strict';

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
 * @param {number[]} arr
 * @return {boolean}
 */
function isValidSequence(node, arr, cur = 0) {
  if (!node) {
    return false;
  }
  const { val, left, right } = node;
  if (val !== arr[cur]) {
    return false;
  }
  if (arr.length === ++cur) {
    return left === right;
  }
  return isValidSequence(left, arr, cur) || isValidSequence(right, arr, cur);
}
