'use strict';

module.exports = { isSymmetric, isSymmetric2 };

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
function isSymmetric2(root) {
  return dfs(root?.left, root?.right);
  function dfs(left, right) {
    if (left == null || right == null) {
      return left === right;
    }
    if (left.val !== right.val) {
      return false;
    }
    return dfs(left.left, right.right) && dfs(left.right, right.left);
  }
}
