'use strict';

module.exports = { removeZeroSumSublists };

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val
 *     this.next = null
 * }
 */
/**
 * @param {ListNode} node
 * @return {ListNode}
 */
function removeZeroSumSublists(node) {
  const head = { next: node };
  let sum = 0;
  const prevMap = new Map();
  prevMap.set(sum, head);
  while (node) {
    sum += node.val;
    if (!prevMap.has(sum)) {
      prevMap.set(sum, node);
      node = node.next;
      continue;
    }
    let cur = sum;
    const prev = prevMap.get(sum);
    let target = prev.next;
    while (target !== node) {
      cur += target.val;
      prevMap.delete(cur);
      target = target.next;
    }
    node = node.next;
    prev.next = node;
  }
  return head.next;
}
