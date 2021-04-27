'use strict';

module.exports = { furthestBuilding };

/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
function furthestBuilding(heights, bricks, ladders) {
  let left = 0;
  const queue = new PriorityQueue((n1, n2) => n1 < n2);
  while (++left < heights.length) {
    const diff = heights[left] - heights[left - 1];
    if (diff <= 0) {
      continue;
    }
    if (queue.push(diff) > ladders) {
      bricks -= queue.pop();
    }
    if (bricks < 0) {
      break;
    }
  }
  return left - 1;
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

function lastStoneWeight4(stones) {
  const counts = Array(1001).fill(0);
  let heaviest = 0;
  for (const stone of stones) {
    heaviest = Math.max(heaviest, stone);
    counts[stone]++;
  }
  let size = stones.length;
  while (size > 1) {
    while (counts[heaviest] === 0) {
      heaviest--;
    }
    const c1 = counts[heaviest];
    if (c1 > 1) {
      const n1 = 2 * ((c1 / 2) | 0);
      size -= n1;
      counts[heaviest] -= n1;
      if (size === 1 || c1 % 2 === 0) {
        continue;
      }
    }
    let next = heaviest - 1;
    while (counts[next] === 0) {
      next--;
    }
    size--;
    counts[next]--;
    counts[heaviest]--;
    counts[heaviest - next]++;
  }
  if (size === 0) {
    return 0;
  }
  while (counts[heaviest] === 0) {
    heaviest--;
  }
  return heaviest;
}

function lastStoneWeight5(stones) {
  let heaviest = 1000;
  const counts = Array(heaviest + 1).fill(0);
  for (const stone of stones) {
    counts[stone]++;
  }
  let size = stones.length;
  while (size > 1) {
    while (counts[heaviest] === 0) {
      heaviest--;
    }
    size--;
    counts[heaviest]--;
    let next = heaviest;
    while (counts[next] === 0) {
      next--;
    }
    counts[next]--;
    if (heaviest === next) {
      size--;
      continue;
    }
    counts[heaviest - next]++;
  }
  if (size === 0) {
    return 0;
  }
  while (counts[heaviest] === 0) {
    heaviest--;
  }
  return heaviest;
}
