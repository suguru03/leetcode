'use strict';

class Node {
  constructor(val, head) {
    this.val = val;
    this.head = head;
    this.tail = null;
    if (head) {
      head.tail = this;
    }
  }
}
class MyQueue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(val) {
    this.tail = new Node(val, this.tail);
    this.head = this.head || this.tail;
  }

  pop() {
    const { head } = this;
    if (!head) {
      return null;
    }
    this.head = head.tail;
    return head.val;
  }

  peek() {
    return this.head ? this.head.val : 0;
  }

  empty() {
    return this.head === null;
  }
}

module.exports = { MyQueue };
