/**
 * Initialize your data structure here.
 */
class MyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  /**
   * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
   * @param {number} index
   * @return {number}
   */
  get(index) {
    const node = this._getNode(index);
    return node ? node.val : -1;
  }

  _getNode(index) {
    const front = index < this.size;
    let count = front ? index : this.size - index - 1;
    const key = front ? 'next' : 'prev';
    let node = front ? this.head : this.tail;
    while (node && count--) {
      node = node[key];
    }
    return node || null;
  }

  /**
   * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
   * @param {number} val
   * @return {void}
   */
  addAtHead(val) {
    const node = new Node(val);
    const { head } = this;
    this.head = node;
    if (!head) {
      this.tail = node;
    } else {
      node.next = head;
      head.prev = node;
    }
    this.size++;
  }

  /**
   * Append a node of value val to the last element of the linked list.
   * @param {number} val
   * @return {void}
   */
  addAtTail(val) {
    const node = new Node(val);
    const { tail } = this;
    this.tail = node;
    if (!tail) {
      this.head = node;
    } else {
      tail.next = node;
      node.prev = tail;
    }
    this.size++;
  }

  /**
   * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
   * @param {number} index
   * @param {number} val
   * @return {void}
   */
  addAtIndex(index, val) {
    if (index > this.size) {
      return;
    }
    if (index <= 0) {
      return this.addAtHead(val);
    }
    if (index === this.size) {
      return this.addAtTail(val);
    }
    const node = new Node(val);
    const next = this._getNode(index);
    const { prev } = next;
    prev.next = node;
    next.prev = node;
    node.prev = prev;
    node.next = next;
    this.size++;
  }

  /**
   * Delete the index-th node in the linked list, if the index is valid.
   * @param {number} index
   * @return {void}
   */
  deleteAtIndex(index) {
    if (this.size === 0 || index < 0 || index >= this.size) {
      return;
    }
    if (index === 0) {
      const { head } = this;
      this.head = head.next;
      if (this.head) {
        this.head.prev = null;
      }
      this.size--;
      return;
    }
    if (index === this.size - 1) {
      const { tail } = this;
      this.tail = tail.prev;
      if (this.tail) {
        this.tail.next = null;
      }
      this.size--;
      return;
    }
    const node = this._getNode(index);
    [node.prev.next, node.next.prev] = [node.next, node.prev];
    this.size--;
  }

  /**
   * Your MyLinkedList object will be instantiated and called as such:
   * var obj = new MyLinkedList()
   * var param_1 = obj.get(index)
   * obj.addAtHead(val)
   * obj.addAtTail(val)
   * obj.addAtIndex(index,val)
   * obj.deleteAtIndex(index)
   */
}

class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

module.exports = { MyLinkedList };
