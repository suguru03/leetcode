'use strict';

class Node {
  constructor(val, size, index) {
    this.val = val;
    this.size = size;
    this.index = index;
  }
}

class FreqStack {
  constructor() {
    this.index = 0;
    this.queue = new PriorityQueue((n1, n2) => (n1.size === n2.size ? n1.index > n2.index : n1.size > n2.size));
    this.countMap = {};
  }
  /**
   * @param {number} x
   * @return {void}
   */
  push(x) {
    this.countMap[x] = ~~this.countMap[x] + 1;
    const node = new Node(x, this.countMap[x], this.index++);
    this.queue.push(node);
  }

  /**
   * @return {number}
   */
  pop() {
    const { val } = this.queue.pop();
    this.countMap[val]--;
    return val;
  }
}

const top = 0;
const parent = (i) => ((i + 1) >>> 1) - 1;
const left = (i) => (i << 1) + 1;
const right = (i) => (i + 1) << 1;

/**
 * @see https://stackoverflow.com/questions/42919469/efficient-way-to-implement-priority-queue-in-javascript/42919752
 */
class PriorityQueue {
  constructor(comparator = (a, b) => a > b) {
    this._heap = [];
    this._comparator = comparator;
  }
  size() {
    return this._heap.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  peek() {
    return this._heap[top];
  }
  push(...values) {
    for (const value of values) {
      this._heap.push(value);
      this._siftUp();
    }
    return this.size();
  }
  pop() {
    const poppedValue = this.peek();
    const bottom = this.size() - 1;
    if (bottom > top) {
      this._swap(top, bottom);
    }
    this._heap.pop();
    this._siftDown();
    return poppedValue;
  }
  replace(value) {
    const replacedValue = this.peek();
    this._heap[top] = value;
    this._siftDown();
    return replacedValue;
  }
  _greater(i, j) {
    return this._comparator(this._heap[i], this._heap[j]);
  }
  _swap(i, j) {
    [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
  }
  _siftUp() {
    let node = this.size() - 1;
    while (node > top && this._greater(node, parent(node))) {
      this._swap(node, parent(node));
      node = parent(node);
    }
  }
  _siftDown() {
    let node = top;
    while (
      (left(node) < this.size() && this._greater(left(node), node)) ||
      (right(node) < this.size() && this._greater(right(node), node))
    ) {
      let maxChild = right(node) < this.size() && this._greater(right(node), left(node)) ? right(node) : left(node);
      this._swap(node, maxChild);
      node = maxChild;
    }
  }
}
