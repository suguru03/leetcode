'use strict';

module.exports = { flatten };

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *   this.val = (val===undefined ? 0 : val)
 *   this.left = (left===undefined ? null : left)
 *   this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} node
 * @return {void} Do not return anything, modify root in-place instead.
 */
function flatten(node, cur = { node }) {
  if (!node) {
    return;
  }
  const { left, right } = node;
  [cur.node.left, cur.node.right, cur.node] = [null, cur.node === node ? null : node, node];
  flatten(left, cur);
  flatten(right, cur);
}

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
 * @return {void} Do not return anything, modify root in-place instead.
 */
function flatten2(root) {
  if (!root) {
    return;
  }
  let cur = root;
  const stack = [root.right, root.left];
  while (stack.length) {
    const node = stack.pop();
    if (!node) {
      continue;
    }
    stack.push(node.right, node.left);
    [cur.left, cur.right, cur] = [null, node, node];
  }
}
