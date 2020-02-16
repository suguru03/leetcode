'use strict';

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
  }
  get(key) {
    if (!this.map.has(key)) {
      return -1;
    }
    const val = this.map.get(key);
    this.put(key, val);
    return val;
  }

  put(key, val) {
    this.map.delete(key);
    this.map.set(key, val);
    if (this.map.size <= this.capacity) {
      return;
    }
    this.map.delete(this.map.keys().next().value);
  }
}

module.exports = { LRUCache };
