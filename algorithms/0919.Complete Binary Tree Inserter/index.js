'use strict';

const { TreeNode } = require('../utils');

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
class CBTInserter {
  constructor(root) {
    this.root = root;
    this.queue = [];
    this.#init();
  }

  #init() {
    const queue = [this.root];
    while (queue.length) {
      const node = queue.shift();
      if (!node) {
        continue;
      }
      if (!node.left || !node.right) {
        this.queue.push(node);
      }
      queue.push(node.left, node.right);
    }
  }

  /**
   * @param {number} val
   * @return {number}
   */
  insert(val) {
    const cur = this.queue[0];
    const node = new TreeNode(val);
    if (!cur.left) {
      cur.left = node;
    } else {
      cur.right = node;
      this.queue.shift();
    }
    this.queue.push(node);
    return cur.val;
  }

  /**
   * @return {TreeNode}
   */
  get_root() {
    return this.root;
  }
}

/**
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(val)
 * var param_2 = obj.get_root()
 */
