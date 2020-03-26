/**
 * @param {number} maxSize
 */
class CustomStack {
  constructor(maxSize) {
    this.size = maxSize;
    this.stack = [];
    this.inc = Array(maxSize).fill(0);
  }
  /**
   * @param {number} x
   * @return {void}
   */
  push(x) {
    if (this.stack.length === this.size) {
      return;
    }
    this.stack.push(x);
  }

  /**
   * @return {number}
   */
  pop() {
    const index = this.stack.length - 1;
    if (index < 0) {
      return -1;
    }
    if (index > 0) {
      this.inc[index - 1] += this.inc[index];
    }
    const result = this.stack.pop() + this.inc[index];
    this.inc[index] = 0;
    return result;
  }

  /**
   * @param {number} k
   * @param {number} val
   * @return {void}
   */
  increment(k, val) {
    const index = Math.min(k, this.stack.length) - 1;
    if (index < 0) {
      return;
    }
    this.inc[index] += val;
  }
}
