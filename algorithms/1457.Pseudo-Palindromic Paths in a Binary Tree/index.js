'use strict';

module.exports = { pseudoPalindromicPaths };

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
 * @param {Set} [odd]
 * @return {number}
 */
function pseudoPalindromicPaths(node, odd = new Set()) {
  if (!node) {
    return 0;
  }
  const { val, left, right } = node;
  const has = odd.has(val);
  if (has) {
    odd.delete(val);
  } else {
    odd.add(val);
  }
  const count =
    pseudoPalindromicPaths(left, odd) + pseudoPalindromicPaths(right, odd) + ~~(left === right && odd.size <= 1);
  if (has) {
    odd.add(val);
  } else {
    odd.delete(val);
  }
  return count;
}
