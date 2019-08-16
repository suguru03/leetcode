/**
 * @see https://www.geeksforgeeks.org/implementing-our-own-hash-table-with-separate-chaining-in-java/
 * Initialize your data structure here.
 */
class MyHashSet {
  constructor() {
    this.bucket = Array(10);
  }

  /**
   * @param {number} key
   * @return {void}
   */
  add(key) {
    if (this.contains(key)) {
      return;
    }
    const index = this._getIndex(key);
    const head = new Node(key);
    head.next = this.bucket[index];
    this.bucket[index] = head;
  }

  /**
   * @param {number} key
   * @return {void}
   */
  remove(key) {
    if (!this.contains(key)) {
      return;
    }
    const index = this._getIndex(key);
    let node = this.bucket[index];
    let prev = null;
    while (node) {
      if (node.value === key) {
        break;
      }
      [prev, node] = [node, node.next];
    }
    if (!node) {
      return;
    }
    if (prev) {
      prev.next = node.next;
    } else {
      this.bucket[index] = node.next;
    }
  }

  /**
   * Returns true if this set contains the specified element
   * @param {number} key
   * @return {boolean}
   */
  contains(key) {
    const index = this._getIndex(key);
    let node = this.bucket[index];
    while (node) {
      if (node.value === key) {
        return true;
      }
      node = node.next;
    }
    return false;
  }

  _getIndex(key) {
    return key % this.bucket.length;
  }

  /**
   * Your MyHashSet object will be instantiated and called as such:
   * var obj = new MyHashSet()
   * obj.add(key)
   * obj.remove(key)
   * var param_3 = obj.contains(key)
   */
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

module.exports = { MyHashSet };
