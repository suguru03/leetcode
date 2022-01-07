/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
class Solution {
  constructor(head) {
    this.size = 1e4;
    this.count = 0;
    this.head = head;
    this.node = head;
  }

  /**
   * @return {number}
   */
  getRandom() {
    let node = this.node;
    let rand = (Math.random() * this.size) | 0;
    do {
      if (this.head !== null) {
        this.count++;
      }
      [node, this.node] = [this.node, this.node.next];
    } while (this.node && --rand >= 0);
    if (this.node) {
      return node.val;
    }
    [node.next, this.node, this.head, this.size] = [this.head, this.head, null, this.count];
    return this.getRandom();
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
