/**
 * Initialize your data structure here.
 */
class RandomizedSet {
  map = new Map();
  values = [];

  /**
   * Inserts a value to the set. Returns true if the set did not already contain the specified element.
   * @param {number} val
   * @return {boolean}
   */
  insert(val) {
    if (this.map.has(val)) {
      return false;
    }
    this.map.set(val, this.values.push(val) - 1);
    return true;
  }

  /**
   * Removes a value from the set. Returns true if the set contained the specified element.
   * @param {number} val
   * @return {boolean}
   */
  remove(val) {
    if (!this.map.has(val)) {
      return false;
    }
    const index = this.map.get(val);
    const lastIndex = this.values.length - 1;
    if (index !== lastIndex) {
      const value = this.values[lastIndex];
      this.values[index] = value;
      this.map.set(value, index);
    }
    this.values.pop();
    this.map.delete(val);
    return true;
  }

  /**
   * Get a random element from the set.
   * @return {number}
   */
  getRandom() {
    return this.values[(Math.random() * this.values.length) | 0];
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

/**
 * Initialize your data structure here.
 */
class RandomizedSet {
  set = new Set();

  /**
   * Inserts a value to the set. Returns true if the set did not already contain the specified element.
   * @param {number} val
   * @return {boolean}
   */
  insert(val) {
    if (this.set.has(val)) {
      return false;
    }
    this.set.add(val);
    return true;
  }

  /**
   * Removes a value from the set. Returns true if the set contained the specified element.
   * @param {number} val
   * @return {boolean}
   */
  remove(val) {
    return this.set.delete(val);
  }

  /**
   * Get a random element from the set.
   * @return {number}
   */
  getRandom() {
    return Array.from(this.set)[(Math.random() * this.set.size) | 0];
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
