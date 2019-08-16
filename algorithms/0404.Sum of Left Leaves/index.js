'use strict';

module.exports = { sumOfLeftLeaves };

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
function sumOfLeftLeaves(root, isLeft) {
  if (!root) {
    return 0;
  }
  const { left, right } = root;
  if (!left && !right) {
    return isLeft ? root.val : 0;
  }
  return sumOfLeftLeaves(left, true) + sumOfLeftLeaves(right, false);
}
