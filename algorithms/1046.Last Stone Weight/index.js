'use strict';

module.exports = { lastStoneWeight, lastStoneWeight2, lastStoneWeight3 };

/**
 * @param {number[]} stones
 * @return {number}
 */
function lastStoneWeight(stones) {
  while (stones.length > 1) {
    stones.sort((n1, n2) => n1 - n2);
    const s1 = stones.pop();
    const s2 = stones.pop();
    if (s1 === s2) {
      continue;
    }
    stones.push(s1 - s2);
  }
  return stones[0] || 0;
}

/**
 * @param {number[]} stones
 * @return {number}
 */
function lastStoneWeight2(stones) {
  stones.sort((n1, n2) => n1 - n2);
  while (stones.length > 1) {
    const s1 = stones.pop();
    const s2 = stones.pop();
    if (s1 === s2) {
      continue;
    }
    const s3 = s1 - s2;
    const i = binarySearch(stones, s3);
    stones.splice(s3 > stones[i] ? i + 1 : i, 0, s3);
  }
  return stones[0] || 0;
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function binarySearch(nums, target) {
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    const m = ((l + r) / 2) | 0;
    const n = nums[m];
    if (n === target) {
      return m;
    }
    if (n < target) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  return ((l + r) / 2) | 0;
}

/**
 * @param {number[]} stones
 * @return {number}
 */
function lastStoneWeight3(stones) {
  const queue = new PriorityQueue();
  queue.push(...stones);
  while (queue.size() > 1) {
    const s1 = queue.pop();
    const s2 = queue.pop();
    const diff = s1 - s2;
    if (diff) {
      queue.push(diff);
    }
  }
  return queue.peek() || 0;
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
      let maxChild =
        right(node) < this.size() && this._greater(right(node), left(node))
          ? right(node)
          : left(node);
      this._swap(node, maxChild);
      node = maxChild;
    }
  }
}
