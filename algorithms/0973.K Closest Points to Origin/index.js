'use strict';

module.exports = { kClosest, kClosest2 };

class Point {
  constructor([x, y]) {
    this.point = [x, y];
    this.distance = x ** 2 + y ** 2;
  }
}

/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
function kClosest(points, K) {
  const queue = new PriorityQueue((p1, p2) => p1.distance > p2.distance);
  for (const point of points) {
    queue.push(new Point(point));
    if (queue.size() > K) {
      queue.pop();
    }
  }
  const result = [];
  while (queue.size()) {
    result.push(queue.pop().point);
  }
  return result;
}

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
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
function kClosest2(points, K) {
  return points.sort(([x1, y1], [x2, y2]) => x1 ** 2 + y1 ** 2 - (x2 ** 2 + y2 ** 2)).slice(0, K);
}
