'use strict';

module.exports = { tree2str };

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
 * @return {string}
 */
function tree2str(node) {
  if (!node) {
    return '';
  }
  let str = node.val.toString();
  const l = tree2str(node.left);
  const r = tree2str(node.right);
  if (l || r) {
    str += `(${l})`;
  }
  if (r) {
    str += `(${r})`;
  }
  return str;
}
