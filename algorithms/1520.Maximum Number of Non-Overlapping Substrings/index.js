'use strict';

module.exports = { maxNumOfSubstrings };

/**
 * @param {string} s
 * @return {string[]}
 */
function maxNumOfSubstrings(s) {
  const charMap = new Map();
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (!charMap.has(char)) {
      charMap.set(char, { char, left: i, right: i, distance: 0 });
      continue;
    }
    const node = charMap.get(char);
    node.right = i;
    node.distance = i - node.left;
  }
  const queue = new PriorityQueue((n1, n2) => n1.distance < n2.distance);
  for (const node of charMap.values()) {
    queue.push(node);
  }
  const taken = new Set();
  const result = [];
  while (queue.size()) {
    const charSet = new Set();
    const data = dfs(queue.pop(), charSet);
    if (!data) {
      continue;
    }
    result.push(s.slice(data.left, data.right + 1));
    for (const char of charSet) {
      taken.add(char);
    }
  }
  return result;

  function dfs(node, set) {
    if (taken.has(node.char)) {
      return null;
    }
    set.add(node.char);
    let { left, right } = node;
    for (let i = node.left; i < node.right; i++) {
      const char = s[i];
      if (set.has(char)) {
        continue;
      }
      const next = dfs(charMap.get(char), set);
      if (!next) {
        return null;
      }
      left = Math.min(left, next.left);
      right = Math.max(right, next.right);
    }
    return { left, right };
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
