'use strict';

module.exports = { bstFromPreorder };

const { TreeNode } = require('../util');

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val
 *     this.left = this.right = null
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
function bstFromPreorder(preorder) {
  if (preorder.length === 0) {
    return null;
  }
  const [val] = preorder;
  let left = 1;
  let right = preorder.length;
  while (left < right) {
    const mid = ((left + right) / 2) | 0;
    if (preorder[mid] > val) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  const node = new TreeNode(val);
  node.left = bstFromPreorder(preorder.slice(1, left));
  node.right = bstFromPreorder(preorder.slice(left));
  return node;
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val
 *     this.left = this.right = null
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
function bstFromPreorder(preorder) {
  return dfs(0, preorder.length);

  function dfs(from, to) {
    if (from >= to) {
      return null;
    }
    const val = preorder[from];
    let left = ++from;
    let right = to;
    while (left < right) {
      const mid = ((left + right) / 2) | 0;
      if (preorder[mid] > val) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    const node = new TreeNode(val);
    node.left = dfs(from, left);
    node.right = dfs(left, to);
    return node;
  }
}
