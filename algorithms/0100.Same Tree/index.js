'use strict';

module.exports = { isSameTree, isSameTree2, isSameTree3 };

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
  if (!p || !q) {
    return p === q;
  }
  if (p.val !== q.val) {
    return false;
  }
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

function isSameTree2(p, q) {
  const queue1 = [p];
  const queue2 = [q];
  while (queue1.length && queue2.length) {
    const n1 = queue1.shift();
    const n2 = queue2.shift();
    if (!n1 || !n2) {
      if (n1 !== n2) {
        return false;
      }
      continue;
    }
    if (n1.val !== n2.val) {
      return false;
    }
    queue1.push(n1.left, n1.right);
    queue2.push(n2.left, n2.right);
  }
  return queue1.length === queue2.length;
}

function isSameTree3(p, q) {
  const queue = [p, q];
  while (queue.length) {
    const [n1, n2] = queue.splice(0, 2);
    if (!n1 || !n2) {
      if (n1 !== n2) {
        return false;
      }
      continue;
    }
    if (n1.val !== n2.val) {
      return false;
    }
    queue.push(n1.left, n2.left, n1.right, n2.right);
  }
  return true;
}
