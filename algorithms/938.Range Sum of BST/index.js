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
function rangeSumBST(root, L, R) {
  let sum = 0;
  dfs(root);
  return sum;

  function dfs(node) {
    if (!node) {
      return;
    }
    const { left, right, val } = node;
    if (val > L) {
      dfs(left);
    }
    if (val >= L && val <= R) {
      sum += val;
    }
    if (val < R) {
      dfs(right);
    }
  }
}

function rangeSumBST2(root, L, R) {
  if (!root) {
    return 0;
  }
  const { left, right, val } = root;
  let sum = val > L ? rangeSumBST(left, L, R) : 0;
  sum += val >= L && val <= R ? val : 0;
  return sum + (val < R ? rangeSumBST(right, L, R) : 0);
}
