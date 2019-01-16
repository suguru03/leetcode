'use strict';

/**
 * Initialize your data structure here.
 */
class MapSum {
  constructor() {
    this._map = {};
  }

  insert(key, val) {
    for (let i = 1; i <= key.length; i++) {
      const s = key.substring(0, i);
      this._map[s] = this._map[s] || {};
      this._map[s][key] = val;
    }
  }

  sum(prefix) {
    const obj = this._map[prefix] || {};
    return Object.entries(obj).reduce((result, [, value]) => result + value, 0);
  }
}

module.exports = { MapSum };
