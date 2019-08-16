'use strict';

const assert = require('assert');
const { MyHashSet } = require('./');

describe('MyHashSet', () => {
  it('should work', () => {
    const hashSet = new MyHashSet();
    hashSet.add(1);
    hashSet.add(2);
    assert.strictEqual(hashSet.contains(1), true);
    assert.strictEqual(hashSet.contains(3), false);
    hashSet.add(2);
    assert.ok(hashSet.contains(2));
    assert.strictEqual(hashSet.contains(2), true);
    hashSet.remove(2);
    assert.strictEqual(hashSet.contains(2), false);
    assert.strictEqual(hashSet.contains(0), false);
    hashSet.add(0);
    assert.strictEqual(hashSet.contains(0), true);
    hashSet.remove(0);
    assert.strictEqual(hashSet.contains(0), false);
    assert.strictEqual(hashSet.contains(1000000), false);
    hashSet.add(1000000);
    assert.strictEqual(hashSet.contains(1000000), true);
    hashSet.remove(1000000);
    assert.strictEqual(hashSet.contains(1000000), false);
  });
});
