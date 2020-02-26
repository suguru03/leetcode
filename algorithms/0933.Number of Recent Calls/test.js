'use strict';

const assert = require('assert');
const { RecentCounter } = require('./');

describe('#RecentCounter', () => {
  it('should work', () => {
    const counter = new RecentCounter();
    assert.strictEqual(counter.ping(1), 1);
    assert.strictEqual(counter.ping(100), 2);
    assert.strictEqual(counter.ping(3001), 3);
    assert.strictEqual(counter.ping(3002), 3);
  });
});
