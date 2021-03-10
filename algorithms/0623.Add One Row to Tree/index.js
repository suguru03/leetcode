'use strict';

const { TreeNode } = require('../util');

module.exports = { addOneRow };

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
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
function addOneRow(root, v, d) {
  const head = new TreeNode(null, root, null);
  const queue = [head];
  while (queue.length && --d >= 1) {
    let size = queue.length;
    while (--size >= 0) {
      const node = queue.shift();
      if (!node) {
        continue;
      }
      queue.push(node.left, node.right);
    }
  }
  for (const node of queue) {
    if (!node) {
      continue;
    }
    node.left = new TreeNode(v, node.left, null);
    node.right = new TreeNode(v, null, node.right);
  }
  return head.left;
}
