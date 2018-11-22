'use strict';

module.exports = { leafSimilar };

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
function leafSimilar(root1, root2) {
  const leaves1 = [];
  const leaves2 = [];
  find(root1, leaves1);
  find(root2, leaves2);
  return (
    leaves1.length === leaves2.length &&
    leaves1.every((n, i) => n === leaves2[i])
  );

  function find(node, arr) {
    if (!node) {
      return true;
    }
    const ll = find(node.left, arr);
    const lr = find(node.right, arr);
    if (ll && lr) {
      arr.push(node.val);
    }
    return false;
  }
}
