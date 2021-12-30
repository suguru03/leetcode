'use strict';

module.exports = { serialize, serialize2, deserialize, deserialize2 };

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

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const offset = 1001;

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
function serialize2(root) {
  const list = [];
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    if (node) {
      queue.push(node.left, node.right);
      list.push(node.val + offset);
    } else {
      list.push(0);
    }
  }

  // trim right
  while (list.length && list[list.length - 1] === 0) {
    list.pop();
  }
  const base = BigInt(Math.max(-1, ...list) + 1);
  let cur = 1n;
  let result = 0n;
  for (const num of list) {
    result += cur * BigInt(num);
    cur *= base;
  }
  return `${base}:${result.toString()}`;
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
function deserialize2(data) {
  const [baseStr, strNum] = data.split(':');
  const list = [];
  const base = BigInt(baseStr);
  let num = BigInt(strNum);
  while (num > 0n) {
    const n = num % base;
    list.push(parseInt(n));
    num -= n;
    num /= base;
  }
  const [head, ...rest] = list;
  const create = (val) => (!val ? null : new TreeNode(val - offset));
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
