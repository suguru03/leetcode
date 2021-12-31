'use strict';

module.exports = { constructFromPrePost };

const { TreeNode } = require('../utils');

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *   this.val = (val===undefined ? 0 : val)
 *   this.left = (left===undefined ? null : left)
 *   this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
function constructFromPrePost(preorder, postorder) {
  if (preorder.length === 0 || postorder.length === 0) {
    return null;
  }
  const node = new TreeNode(preorder.shift());
  postorder.pop();
  if (preorder.length === 0) {
    return node;
  }
  const [next] = preorder;
  const index = postorder.indexOf(next) + 1;
  node.left = constructFromPrePost(preorder.slice(0, index), postorder.slice(0, index));
  node.right = constructFromPrePost(preorder.slice(index), postorder.slice(index));
  return node;
}
