'use strict';

module.exports = { findBottomLeftValue };

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *   this.val = (val===undefined ? 0 : val)
 *   this.left = (left===undefined ? null : left)
 *   this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function findBottomLeftValue(root) {
  let result = 0;
  const queue = [root];
  while (queue.length) {
    let size = queue.length;
    let next = null;
    while (size-- > 0) {
      const node = queue.shift();
      if (!node) {
        continue;
      }
      next ??= node.val;
      queue.push(node.left, node.right);
    }
    result = next ?? result;
  }
  return result;
}
