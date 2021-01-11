'use strict';

const _ = require('lodash');

module.exports = { createSortedArray, createSortedArray2 };

/**
 * @param {number[]} instructions
 * @return {number}
 */
function createSortedArray(instructions) {
  let res = 0;
  let size = 1e5 + 1;
  const mod = 1e9 + 7;
  let c = Array(size).fill(0);

  for (const [i, num] of instructions.entries()) {
    res = (res + Math.min(get(num - 1), i - get(num))) % mod;
    update(num);
  }
  return res;

  function update(x) {
    while (x < size) {
      c[x]++;
      x += x & -x;
    }
  }

  function get(x) {
    let res = 0;
    while (x > 0) {
      res += c[x];
      x -= x & -x;
    }
    return res;
  }
}

/**
 * TLE
 * @param {number[]} instructions
 * @return {number}
 */
function createSortedArray2(instructions) {
  const memos = _.uniq(instructions)
    .sort((n1, n2) => n1 - n2)
    .map(n => new Memo(n, 0));
  const indexMap = {};
  for (const [index, memo] of memos.entries()) {
    indexMap.set(memo.num, index);
  }
  let prev = 0;
  let prevIndex = -1;
  let left = new Memo(-Infinity, 0);
  let right = new Memo(Infinity, 0);
  let total = 0;
  let result = 0;
  let mod = 1e9 + 7;
  for (const num of instructions) {
    const index = indexMap.get(num);
    const next = memos[index];
    let cl = 0;
    let cr = 0;
    if (num === prev) {
      cl = left.count;
      cr = right.count;
    } else if (num > prev) {
      const diff = index - prevIndex;
      if (diff < memos.length / 2) {
        cl = countLeft(index);
        cr = total - cl - next.count;
      } else {
        cr = countRight(index);
        cl = total - cr - next.count;
      }
    } else {
      const diff = prevIndex - index;
      if (diff > memos.length / 2) {
        cl = countLeft(index);
        cr = total - cl - next.count;
      } else {
        cr = countRight(index);
        cl = total - cr - next.count;
      }
    }
    const cost = Math.min(cl, cr);
    result = (result + cost) % mod;
    prev = num;
    prevIndex = index;
    left.num = num;
    left.count = cl;
    right.num = num;
    right.count = cr;
    total++;
    next.count++;
  }
  return result;

  function countLeft(from) {
    let cost = 0;
    for (let i = from - 1; i >= 0; i--) {
      const memo = memos[i];
      cost += memo.count;
      if (memo.num === prev) {
        cost += left.count;
        break;
      }
    }
    return cost;
  }

  function countRight(from) {
    let cost = 0;
    for (let i = from + 1; i < memos.length; i++) {
      const memo = memos[i];
      cost += memo.count;
      if (memo.num === prev) {
        cost += right.count;
        break;
      }
    }
    return cost;
  }
}

class Memo {
  constructor(num, count) {
    this.num = num;
    this.count = count;
  }
}
