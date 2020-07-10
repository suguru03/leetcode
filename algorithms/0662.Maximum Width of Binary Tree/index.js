'use strict';

module.exports = { widthOfBinaryTree, widthOfBinaryTree2 };

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
function widthOfBinaryTree(root) {
  const depth = getDepth(root);
  const memo = Array(depth);
  fill(root, 0, 0);
  let max = 0;
  for (let i = 0; i < memo.length; i++) {
    const { left, right } = memo[i];
    max = Math.max(max, right - left + 1);
  }
  return max;

  function fill(node, d, i) {
    if (!node) {
      return;
    }
    const prev = memo[d - 1];
    if (prev) {
      i -= prev.left;
    }
    const info = (memo[d] = memo[d] || { left: i, right: i });
    info.left = Math.min(info.left, i);
    info.right = Math.max(info.right, i);
    fill(node.left, ++d, 2 * i);
    fill(node.right, d, 2 * i + 1);
  }
}

function getDepth(root) {
  return !root ? 0 : 1 + Math.max(getDepth(root.left), getDepth(root.right));
}

function widthOfBinaryTree2(root) {
  let max = 0;
  let queue = [root];
  while (queue.length) {
    const next = [];
    const left = queue.findIndex(node => node);
    if (left === -1) {
      break;
    }
    const right = findLastIndex(queue);
    max = Math.max(max, right - left + 1);
    for (let i = left; i <= right; i++) {
      const node = queue[i];
      if (node) {
        next.push(node.left, node.right);
      } else {
        next.push(null, null);
      }
    }
    queue = next;
  }
  return max;

  function findLastIndex(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i]) {
        return i;
      }
    }
    return null;
  }
}
