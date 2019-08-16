'use strict';

module.exports = { countNodes, countNodes2 };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function countNodes(root) {
  return !root ? 0 : countNodes(root.left) + countNodes(root.right) + 1;
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @see https://leetcode.com/problems/count-complete-tree-nodes/discuss/61953/Easy-short-c%2B%2B-recursive-solution
 * @param {TreeNode} root
 * @return {number}
 */
function countNodes2(root) {
  if (!root) {
    return 0;
  }
  let cl = height(root, 'left');
  let cr = height(root, 'right');
  if (cl === cr) {
    return (1 << cl) - 1;
  }
  return 1 + countNodes2(root.left) + countNodes2(root.right);
}

function height(node, key) {
  return !node ? 0 : height(node[key], key) + 1;
}
