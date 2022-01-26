'use strict';

module.exports = { getAllElements };

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
function getAllElements(root1, root2) {
  const queue1 = [];
  const queue2 = [];
  dfs(root1, queue1);
  dfs(root2, queue2);
  const result = [];
  while (queue1.length && queue2.length) {
    result.push(queue1[0] > queue2[0] ? queue2.shift() : queue1.shift());
  }
  result.push(...queue1, ...queue2);
  return result;

  function dfs(node, queue) {
    if (!node) {
      return;
    }
    dfs(node.left, queue);
    queue.push(node.val);
    dfs(node.right, queue);
  }
}
