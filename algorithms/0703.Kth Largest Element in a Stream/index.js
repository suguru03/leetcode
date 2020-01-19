'use strict';

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

const top = 0;
const parent = i => ((i + 1) >>> 1) - 1;
const left = i => (i << 1) + 1;
const right = i => (i + 1) << 1;

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

/**
 * @param {number} k
 * @param {number[]} nums
 */
class KthLargest {
  constructor(k, nums) {
    this.k = k;
    this.queue = new PriorityQueue((a, b) => a < b);
    for (const num of nums) {
      this.add(num);
    }
  }

  /**
   * @param {number} val
   * @return {number}
   */
  add(val) {
    if (this.queue.size() === this.k) {
      if (val <= this.queue.peek()) {
        return this.queue.peek();
      }
      this.queue.pop();
    }
    this.queue.push(val);
    return this.queue.peek();
  }
}

module.exports = { KthLargest };
