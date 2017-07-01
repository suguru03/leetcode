'use strict';

module.exports = { isSameTree };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
function isSameTree(p, q) {
  const nop = !p;
  const noq = !q;
  if (nop && noq) {
    return true;
  }
  if (nop | noq) {
    return false;
  }
  if (p.val !== q.val) {
    return false;
  }
  const { left: lp, right: rp } = p;
  const { left: lq, right: rq } = q;
  return isSameTree(lp, lq) && isSameTree(rp, rq);
}
