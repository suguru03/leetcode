'use strict';

const _ = require('lodash');

class Solution {
  constructor(w) {
    this.w = w;
    for (let i = 1; i < w.length; i++) {
      this.w[i] += this.w[i - 1];
    }
  }

  pickIndex() {
    const random = Math.ceil(Math.random() * this.w[this.w.length - 1]);
    let left = 0;
    let right = this.w.length;
    while (left < right) {
      const mid = (right + (left - right) / 2) | 0;
      const weight = this.w[mid];
      if (weight < random) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return left;
  }
}

class Solution2 {
  constructor(w) {
    this.w = w;
    _.times(w.length - 1, i => (this.w[i + 1] += this.w[i]));
  }

  pickIndex() {
    return _.sortedIndex(this.w, _.random(1, this.w[this.w.length - 1]));
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
