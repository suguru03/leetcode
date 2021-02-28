'use strict';

class FreqStack {
  constructor() {
    this.stack = [];
    this.countMap = {};
  }
  /**
   * @param {number} x
   * @return {void}
   */
  push(x) {
    this.countMap[x] = ~~this.countMap[x] + 1;
    const count = this.countMap[x];
    if (this.stack.length < count) {
      this.stack.push([]);
    }
    this.stack[count - 1].push(x);
  }

  /**
   * @return {number}
   */
  pop() {
    const last = this.stack[this.stack.length - 1];
    const result = last.pop();
    this.countMap[result]--;
    if (last.length === 0) {
      this.stack.pop();
    }
    return result;
  }
}
