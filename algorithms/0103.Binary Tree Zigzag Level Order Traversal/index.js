'use strict';

module.exports = { zigzagLevelOrder };

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function zigzagLevelOrder(root) {
  const result = [];
  const queue = [root];
  while (queue.length) {
    const row = [];
    const next = [];
    while (queue.length) {
      const node = queue.shift();
      if (!node) {
        continue;
      }
      row.push(node.val);
      next.push(node.left, node.right);
    }
    if (row.length === 0) {
      break;
    }
    if (result.length % 2 === 1) {
      row.reverse();
    }
    result.push(row);
    queue.push(...next);
  }
  return result;
}
