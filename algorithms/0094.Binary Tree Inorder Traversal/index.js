'use strict';

module.exports = { inorderTraversal, inorderTraversal2, inorderTraversal3 };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val
 *   this.left = this.right = null
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function inorderTraversal(root) {
  const result = [];
  if (!root) {
    return result;
  }
  const queue = [root];
  while (queue.length) {
    const [node] = queue;
    const { val, left, right } = node;
    if (left) {
      node.left = null;
      queue.unshift(left);
      continue;
    }
    result.push(val);
    queue.shift();
    if (right) {
      queue.unshift(right);
    }
  }
  return result;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function inorderTraversal2(root) {
  const result = [];
  if (!root) {
    return result;
  }
  const stack = [root];
  while (stack.length) {
    const node = stack[stack.length - 1];
    const { val, left, right } = node;
    if (left) {
      node.left = null;
      stack.push(left);
      continue;
    }
    result.push(val);
    stack.pop();
    if (right) {
      stack.push(right);
    }
  }
  return result;
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
 * @return {number[]}
 */
function inorderTraversal3(root) {
  const result = [];
  dfs(root);
  return result;

  function dfs(node) {
    if (!node) {
      return;
    }
    dfs(node.left);
    result.push(node.val);
    dfs(node.right);
  }
}
