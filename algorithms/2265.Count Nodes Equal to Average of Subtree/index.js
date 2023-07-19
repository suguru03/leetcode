'use strict';

module.exports = { averageOfSubtree };

class Memo {
  constructor() {
    this.sum = 0;
    this.count = 0;
    this.result = 0;
  }

  add({ sum, count, result }) {
    this.sum += sum;
    this.count += count;
    this.result += result;
    return this;
  }
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function averageOfSubtree(root) {
  return count(root).result;
  function count(node) {
    if (!node) {
      return new Memo();
    }
    const next = new Memo().add(count(node.left)).add(count(node.right));
    next.sum += node.val;
    next.count++;
    next.result += Number(((next.sum / next.count) | 0) === node.val);
    return next;
  }
}
