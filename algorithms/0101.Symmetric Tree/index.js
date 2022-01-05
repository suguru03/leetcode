'use strict';

module.exports = { isSymmetric };

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isSymmetric(root) {
  const queue = [root.left, root.right];
  while (queue.length) {
    const left = queue.shift();
    const right = queue.pop();
    if (left === right) {
      continue;
    }
    if (left?.val !== right?.val) {
      return false;
    }
    queue.unshift(left.right, left.left);
    queue.push(right.right, right.left);
  }
  return true;
}
