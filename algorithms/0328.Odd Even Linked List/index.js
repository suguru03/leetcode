'use strict';

module.exports = { oddEvenList };

const { ListNode } = require('../utils');

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function oddEvenList(head) {
  const nodes = [new ListNode(), new ListNode()];
  const [ho, he] = nodes;
  while (head) {
    const idx = (nodes[0].next === head) & 1;
    [nodes[idx].next, nodes[idx], head] = [head, head, head.next];
  }
  const [odd, even] = nodes;
  odd.next = he.next;
  even.next = null;
  return ho.next;
}
