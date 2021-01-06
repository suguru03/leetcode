'use strict';

const { ListNode } = require('../util');

module.exports = { deleteDuplicates };

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} node
 * @return {ListNode}
 */
function deleteDuplicates(node) {
  const head = new ListNode();
  let prev = head;
  while (node) {
    const cur = node;
    do {
      node = node.next;
    } while (cur.val === node?.val);
    if (cur.next !== node) {
      continue;
    }
    [prev.next, prev] = [cur, cur];
  }
  prev.next = null;
  return head.next;
}
