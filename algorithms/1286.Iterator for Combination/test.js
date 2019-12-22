'use strict';

const assert = require('assert');
const { CombinationIterator } = require('./');

describe('#CombinationIterator', () => {
  it('should work', () => {
    const iterator = new CombinationIterator('abc', 2); // creates the iterator.

    assert.strictEqual(iterator.next(), 'ab'); // returns "ab"
    assert.strictEqual(iterator.hasNext(), true); // returns true
    assert.strictEqual(iterator.next(), 'ac'); // returns "ac"
    assert.strictEqual(iterator.hasNext(), true); // returns true
    assert.strictEqual(iterator.next(), 'bc'); // returns "bc"
    assert.strictEqual(iterator.hasNext(), false); // returns false
  });
});
