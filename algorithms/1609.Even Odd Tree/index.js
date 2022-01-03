'use strict';

module.exports = { isEvenOddTree };

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
 * @return {boolean}
 */
function isEvenOddTree(root) {
  let odd = 0;
  let queue = [root];
  while (queue.length) {
    const sign = odd ? -1 : 1;
    let prev = sign * -1 * Infinity;
    let size = queue.length;
    while (size-- > 0) {
      const node = queue.shift();
      if (!node) {
        continue;
      }
      if ((node.val & 1) === odd) {
        return false;
      }
      if (sign * (node.val - prev) <= 0) {
        return false;
      }
      prev = node.val;
      queue.push(node.left, node.right);
    }
    odd ^= 1;
  }
  return true;
}
