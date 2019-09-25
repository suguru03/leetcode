'use strict';

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class MinStack {
  constructor() {
    this._head = null;
  }

  push(x) {
    this._head = new Node(x, this._head);
  }

  pop() {
    const { _head } = this;
    if (!_head) {
      return undefined;
    }
    this._head = _head.next;
    return _head.value;
  }

  top() {
    const { _head } = this;
    return _head ? _head.value : undefined;
  }

  getMin() {
    let { _head } = this;
    if (!_head) {
      return;
    }
    let min = Infinity;
    while (_head) {
      min = Math.min(min, _head.value);
      _head = _head.next;
    }
    return min;
  }
}

class MinStack2 {
  constructor() {
    this._min = Infinity;
    this._array = [];
  }

  push(x) {
    if (x <= this._min) {
      this._array.push(this._min);
      this._min = x;
    }
    this._array.push(x);
  }

  pop() {
    const value = this._array.pop();
    if (value === this._min) {
      this._min = this._array.pop();
    }
    return value;
  }

  top() {
    return this._array[this._array.length - 1];
  }

  getMin() {
    return this._array.length ? this._min : undefined;
  }
}

class MinStack3 {
  constructor() {
    this._min = Infinity;
    this._head = null;
  }

  push(x) {
    if (x <= this._min) {
      this._head = new Node(this._min, this._head);
      this._min = x;
    }
    this._head = new Node(x, this._head);
  }

  pop() {
    const { _head } = this;
    if (!_head) {
      return undefined;
    }
    const { value, next } = _head;
    this._head = next;
    if (value === this._min && next) {
      this._min = next.value;
      this._head = next.next;
    }
    return value;
  }

  top() {
    const { _head } = this;
    return _head ? _head.value : undefined;
  }

  getMin() {
    return this._head ? this._min : undefined;
  }
}

class Node2 {
  constructor(value, min, next) {
    this.value = value;
    this.min = min;
    this.next = next;
  }
}

class MinStack4 {
  constructor() {
    this._head = null;
  }

  push(x) {
    const min = Math.min(x, this._head ? this._head.min : Infinity);
    this._head = new Node2(x, min, this._head);
  }

  pop() {
    const { _head } = this;
    if (!_head) {
      return null;
    }
    const { value, next } = _head;
    this._head = next;
    return value;
  }

  top() {
    const { _head } = this;
    return _head ? _head.value : null;
  }

  getMin() {
    return this._head ? this._head.min : null;
  }
}

module.exports = { MinStack, MinStack2, MinStack3, MinStack4 };
