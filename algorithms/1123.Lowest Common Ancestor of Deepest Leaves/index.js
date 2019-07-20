'use strict';

module.exports = { lcaDeepestLeaves, lcaDeepestLeaves2 };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val
 *     this.left = this.right = null
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function lcaDeepestLeaves(root) {
  const depth = getDepth(root);
  let result = null;
  dfs(root, 0);
  return result;

  function dfs(node, d) {
    if (!node) {
      return d === depth;
    }
    const l = dfs(node.left, ++d);
    const r = dfs(node.right, d);
    if (l && r) {
      result = node;
    }
    return l || r;
  }
}

function getDepth(root) {
  return !root ? 0 : 1 + Math.max(getDepth(root.left), getDepth(root.right));
}

/**
 * @see https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/discuss/334577/JavaC%2B%2BPython-Two-Recursive-Solution
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function lcaDeepestLeaves2(root) {
  return dfs(root)[0];

  function dfs(node) {
    if (!node) {
      return [null, 0];
    }
    const [rl, dl] = dfs(node.left);
    const [rr, dr] = dfs(node.right);
    if (dl > dr) {
      return [rl, dl + 1];
    }
    if (dr > dl) {
      return [rr, dr + 1];
    }
    return [node, dl + 1];
  }
}
