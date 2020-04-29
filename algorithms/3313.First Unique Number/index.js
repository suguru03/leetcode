'use strict';

/**
 * @param {number[]} nums
 */
class FirstUnique {
  constructor(nums) {
    this.uniqueStack = new Set();
    this.nonuniqueNums = new Set();
    for (const num of nums) {
      this.add(num);
    }
  }
  /**
   * @return {number}
   */
  showFirstUnique() {
    const result = this.uniqueStack.values().next();
    return result.done ? -1 : result.value;
  }

  /**
   * @param {number} value
   * @return {void}
   */
  add(value) {
    if (this.nonuniqueNums.has(value)) {
      return;
    }
    if (this.uniqueStack.has(value)) {
      this.uniqueStack.delete(value);
      this.nonuniqueNums.add(value);
      return;
    }
    this.uniqueStack.add(value);
  }

  /**
   * Your FirstUnique object will be instantiated and called as such:
   * var obj = new FirstUnique(nums)
   * var param_1 = obj.showFirstUnique()
   * obj.add(value)
   */
}
