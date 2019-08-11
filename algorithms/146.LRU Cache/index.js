'use strict';

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }
  get(key) {
    if (!this.cache.has(key)) {
      return -1;
    }
    const n = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, n);
    return n;
  }
  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size === this.capacity) {
      const { value } = this.cache.keys().next();
      this.cache.delete(value);
    }
    this.cache.set(key, value);
  }
}

module.exports = { LRUCache };
