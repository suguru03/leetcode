'use strict';

module.exports = { checkEqualTree, checkEqualTree2 };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function checkEqualTree(root) {
  const hash = new Map();
  const total = getSum(root);
  if (total % 2 === 1) {
    return false;
  }
  const half = total / 2;
  return find(root, 0);

  function find(node, sum) {
    if (!node) {
      return false;
    }
    const { left, right, val } = node;
    sum += val;
    if (left && right) {
      const sl = getSum(left);
      const sr = getSum(right);
      if (sl + sum === half || sr + sum === half) {
        return true;
      }
      return sl < sr && half >= 0 ? find(right, sl + sum) : find(left, sr + sum);
    }
    return sum === half ? !!left || !!right : find(left, sum) || find(right, sum);
  }

  function getSum(node) {
    if (!node) {
      return 0;
    }
    const cache = hash.get(node);
    if (cache) {
      return cache;
    }
    const sum = node.val + getSum(node.left) + getSum(node.right);
    hash.set(node, sum);
    return sum;
  }
}

function checkEqualTree2(root) {
  const hash = {};
  const sum = getSum(root);
  return sum === 0 ? hash[sum] > 1 : !!hash[sum / 2];

  function getSum(node) {
    if (!node) {
      return 0;
    }
    const sum = node.val + getSum(node.left) + getSum(node.right);
    hash[sum] = ++hash[sum] || 1;
    return sum;
  }
}
