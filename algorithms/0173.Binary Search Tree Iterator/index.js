'use strict';

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
 */
class BSTIterator {
  constructor(root) {
    const queue = [];
    this.queue = queue;
    dfs(root);

    function dfs(node) {
      if (!node) {
        return;
      }

      dfs(node.left);
      queue.push(node.val);
      dfs(node.right);
    }
  }

  /**
   * @return {number}
   */
  next() {
    return this.queue.shift();
  }

  /**
   * @return {boolean}
   */
  hasNext() {
    return this.queue.length !== 0;
  }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
