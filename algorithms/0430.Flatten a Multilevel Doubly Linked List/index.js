'use strict';

module.exports = { flatten };

/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
function flatten(head) {
  flattenNode(head);
  return head;
}

function flattenNode(head) {
  let node = head;
  let last = head;
  while (node) {
    const { child, next } = node;
    if (child) {
      const [head, last] = flattenNode(child);
      [node.child, head.prev, node.next, node] = [null, node, head, last];
    }
    if (next) {
      next.prev = node;
    }
    [node.next, node, last] = [next, next, node];
  }
  return [head, last];
}
