'use strict';

const assert = require('assert');
const { LRUCache } = require('./');

describe('#LRUCache', () => {
  it('should work', () => {
    const cache = new LRUCache(2 /* capacity */);
    cache.put(1, 1);
    cache.put(2, 2);
    assert.strictEqual(cache.get(1), 1); // returns 1
    cache.put(3, 3); // evicts key 2
    assert.strictEqual(cache.get(2), -1); // returns -1 (not found)
    cache.put(4, 4); // evicts key 1
    assert.strictEqual(cache.get(1), -1); // returns -1 (not found)
    assert.strictEqual(cache.get(3), 3); // returns 3
    assert.strictEqual(cache.get(4), 4); // returns 4
  });
});
