'use strict';

module.exports = { rangeSumBST, rangeSumBST2 };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val
 *     this.left = this.right = null
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
function rangeSumBST(node, L, R) {
  if (!node) {
    return 0;
  }
  const { val, left, right } = node;
  let sum = val >= L && val <= R ? val : 0;
  if (val > L) {
    sum += rangeSumBST(left, L, R);
  }
  if (val < R) {
    sum += rangeSumBST(right, L, R);
  }
  return sum;
}

function rangeSumBST2(node, L, R) {
  if (!node) {
    return 0;
  }
  const { val, left, right } = node;
  const m = val >= L && val <= R ? val : 0;
  const l = val < L ? 0 : rangeSumBST2(left, L, R);
  const r = val > R ? 0 : rangeSumBST2(right, L, R);
  return m + l + r;
}
