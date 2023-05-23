'use strict';

module.exports = { hasPathSum, hasPathSum2 };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} node
 * @param {number} sum
 * @return {boolean}
 */
function hasPathSum(node, sum) {
  if (!node) {
    return false;
  }
  const { left, right, val } = node;
  sum -= val;
  return (left === right && sum === 0) || hasPathSum(left, sum) || hasPathSum(right, sum);
}

function hasPathSum2(node, sum) {
  const queue = [[node, sum]];
  while (queue.length !== 0) {
    let [node, sum] = queue.shift();
    if (node === null) {
      continue;
    }
    const { left, right, val } = node;
    sum -= val;
    if (left === right) {
      if (sum === 0) {
        return true;
      }
      continue;
    }
    queue.push([left, sum], [right, sum]);
  }

  return false;
}
