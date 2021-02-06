'use strict';

module.exports = { rightSideView };

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
 * @return {number[]}
 */
function rightSideView(root) {
  let queue = [root];
  let depth = 0;
  const result = [];
  while (queue.length) {
    const next = [];
    while (queue.length) {
      const node = queue.shift();
      if (!node) {
        continue;
      }
      result[depth] = node.val;
      next.push(node.left, node.right);
    }
    queue = next;
    depth++;
  }
  return result;
}
