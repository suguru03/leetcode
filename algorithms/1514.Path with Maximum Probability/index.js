'use strict';

module.exports = { maxProbability };

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
function maxProbability(n, edges, succProb, start, end) {
  const map = new Map();
  for (const [index, [from, to]] of edges.entries()) {
    map.set(from, map.get(from) || new Map());
    map.get(from).set(to, succProb[index]);
    map.set(to, map.get(to) || new Map());
    map.get(to).set(from, succProb[index]);
  }
  const probMap = new Map([[start, 1], [end, 0]]);
  const queue = new PriorityQueue((d1, d2) => d1.prob > d2.prob);
  queue.push({ from: start, prob: 1 });
  while (queue.size() !== 0) {
    const { from, prob } = queue.pop();
    const base = probMap.get(from);
    if (prob < base || prob <= probMap.get(end)) {
      continue;
    }
    const distMap = map.get(from);
    if (!distMap) {
      continue;
    }
    for (const [to, prob] of distMap.entries()) {
      const next = base * prob;
      const prev = probMap.get(to) || 0;
      if (next <= probMap.get(end)) {
        continue;
      }
      if (next <= prev) {
        continue;
      }
      probMap.set(to, next);
      queue.push({ from: to, prob: next });
    }
  }
  return probMap.get(end) || 0;
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
