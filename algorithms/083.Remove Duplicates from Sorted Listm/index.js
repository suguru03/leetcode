'use strict';

module.exports = { deleteDuplicates };

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function deleteDuplicates(head) {
  if (!head) {
    return head;
  }
  let node = head;
  let { val: prev } = node;
  while (node) {
    const { next } = node;
    if (!next) {
      break;
    }
    const { val } = next;
    if (prev === val) {
      node.next = next.next;
      continue;
    }
    prev = val;
    node = next;
  }
  return head;
}
