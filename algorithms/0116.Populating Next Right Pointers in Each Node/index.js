'use strict';

module.exports = { connect, connect2 };

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
function connect(root) {
  let queue = [root];
  while (queue.length) {
    let prev = null;
    const next = [];
    for (const node of queue) {
      if (!node) {
        continue;
      }
      if (prev) {
        prev.next = node;
      }
      prev = node;
      next.push(node.left, node.right);
    }
    queue = next;
  }
  return root;
}

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
function connect2(root) {
  const nodes = [];
  dfs(root, 0);
  return root;

  function dfs(node, level) {
    if (node == null) {
      return;
    }

    if (nodes[level]) {
      nodes[level].next = node;
    }
    nodes[level++] = node;
    dfs(node.left, level);
    dfs(node.right, level);
  }
}
