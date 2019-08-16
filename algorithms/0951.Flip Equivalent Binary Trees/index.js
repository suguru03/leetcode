'use strict';

module.exports = { flipEquiv };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val
 *   this.left = this.right = null
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
function flipEquiv(root1, root2) {
  if (!root1 || !root2) {
    return !root1 === !root2;
  }
  const { val: v1, left: l1, right: r1 } = root1;
  const { val: v2, left: l2, right: r2 } = root2;
  return (
    v1 === v2 &&
    ((flipEquiv(r1, l2) && flipEquiv(l1, r2)) || (flipEquiv(r1, r2) && flipEquiv(l1, l2)))
  );
}
