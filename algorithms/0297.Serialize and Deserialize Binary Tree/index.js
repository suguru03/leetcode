'use strict';

module.exports = { serialize, deserialize };

const { TreeNode } = require('../utils');

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
function serialize(root) {
  const result = [];
  const queue = [root];
  const used = new Set();
  while (queue.length) {
    const node = queue.shift();
    if (node) {
      used.add();
      queue.push(node.left, node.right);
      result.push(node.val);
    } else {
      result.push(null);
    }
  }
  // trim right
  while (result.length && result[result.length - 1] === null) {
    result.pop();
  }
  return result.toString();
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
function deserialize(data) {
  const [head, ...rest] = data.split(',');
  const create = (val) => (!val ? null : new TreeNode(Number(val)));
  const root = create(head);
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    if (!node) {
      continue;
    }
    node.left = create(rest.shift());
    node.right = create(rest.shift());
    queue.push(node.left, node.right);
  }
  return root;
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
