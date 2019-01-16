'use strict';

class Data {
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
    this._head = null;
    this._tail = null;
  }

  push(x) {
    const data = new Data(x, this._tail);
    if (!this._head) {
      this._head = data;
    }
    this._tail = data;
  }

  pop() {
    const { _head } = this;
    if (!_head) {
      return null;
    }
    this._head = _head.tail;
    return _head.val;
  }

  peek() {
    return this._head ? this._head.val : null;
  }

  empty() {
    return !this._head;
  }
}

module.exports = { MyQueue };
