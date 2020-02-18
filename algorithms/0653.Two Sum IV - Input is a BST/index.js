'use strict';

module.exports = { findTarget };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} node
 * @param {number} k
 * @param {Set<number>} [set]
 * @return {boolean}
 */
function findTarget(node, k, set = new Set()) {
  if (!node) {
    return false;
  }
  const { val, left, right } = node;
  if (set.has(val)) {
    return true;
  }
  set.add(k - val);
  return findTarget(left, k, set) || findTarget(right, k, set);
}
