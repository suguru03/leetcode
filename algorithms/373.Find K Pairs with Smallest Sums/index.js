'use strict';

module.exports = { kSmallestPairs };

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
function kSmallestPairs(nums1, nums2, k) {
  const result = [];
  const l1 = nums1.length;
  const l2 = nums2.length;
  if (!l1 || !l2) {
    return result;
  }
  const used = Array.from(nums1, () => Array(l2));
  const queue = new PriorityQueue([[0, 0]], (a1, a2) => sum(...a1) < sum(...a2));
  while (!queue.isEmpty() && result.length < k) {
    const [i1, i2] = queue.pop();
    result.push([nums1[i1], nums2[i2]]);
    add(i1 + 1, i2);
    add(i1, i2 + 1);
  }
  return result;

  function sum(i1, i2) {
    return nums1[i1] + nums2[i2];
  }

  function add(i1, i2) {
    if (i1 === l1 || i2 === l2 || used[i1][i2]) {
      return;
    }
    used[i1][i2] = true;
    queue.push([i1, i2]);
  }
}

const top = 0;
const parent = i => ((i + 1) >>> 1) - 1;
const left = i => (i << 1) + 1;
const right = i => (i + 1) << 1;

/**
 * @see https://stackoverflow.com/questions/42919469/efficient-way-to-implement-priority-queue-in-javascript/42919752
 */
class PriorityQueue {
  constructor(heap = [], comparator = (a, b) => a > b) {
    this._heap = heap;
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
