'use strict';

module.exports = { maxDepth, maxDepth2 };

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} node
 * @return {number}
 */
function maxDepth(node) {
  return node === null ? 0 : Math.max(0, ...node.children.map(maxDepth)) + 1;
}

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
function maxDepth2(root) {
  if (!root) {
    return 0;
  }
  let depth = 1;
  const queue = [...root.children];
  while (queue.length) {
    depth++;
    let size = queue.length;
    while (size--) {
      queue.push(...queue.shift().children);
    }
  }
  return depth;
}
