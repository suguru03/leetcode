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
  const set = new Set();
  let prev = head;
  let node = head;
  while (node) {
    if (set.has(node.val)) {
      prev.next = node.next;
    } else {
      set.add(node.val);
      prev = node;
    }
    node = node.next;
  }
  return head;
}
