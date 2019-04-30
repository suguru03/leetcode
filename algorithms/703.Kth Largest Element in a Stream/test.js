'use strict';

const assert = require('assert');
const _ = require('lodash');

const { KthLargest } = require('./');

describe('#kThLargetstElement', () => {
  it('should work', () => {
    const k = 3;
    const arr = [4, 5, 8, 2];
    const kthLargest = new KthLargest(k, arr);
    assert.strictEqual(kthLargest.add(3), 4);
    assert.strictEqual(kthLargest.add(5), 5);
    assert.strictEqual(kthLargest.add(10), 5);
    assert.strictEqual(kthLargest.add(9), 8);
    assert.strictEqual(kthLargest.add(4), 8);
  });
});
