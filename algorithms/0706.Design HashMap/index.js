class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

/**
 * Initialize your data structure here.
 */
class MyHashMap {
  constructor() {
    this.bucket = Array(1e5);
  }
  /**
   * value will always be non-negative.
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    const index = this._getIndex(key);
    const node = new Node(key, value);
    node.next = this.bucket[index];
    this.bucket[index] = node;
  }

  /**
   * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
   * @param {number} key
   * @return {number}
   */
  get(key) {
    const index = this._getIndex(key);
    let node = this.bucket[index];
    while (node) {
      if (node.key === key) {
        return node.value;
      }
    }
    return -1;
  }

  /**
   * Removes the mapping of the specified value key if this map contains a mapping for the key
   * @param {number} key
   * @return {void}
   */
  remove(key) {
    const index = this._getIndex(key);
    let node = this.bucket[index];
    let head = new Node();
    let prev = head;
    while (node) {
      if (node.key !== key) {
        [prev.next, prev] = [node, node];
      }
      node = node.next;
    }
    this.bucket[index] = head.next;
  }

  _getIndex(key) {
    return key % this.bucket.length;
  }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
