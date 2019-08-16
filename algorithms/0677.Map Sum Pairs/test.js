'use strict';

const assert = require('assert');
const { MapSum } = require('./');

describe('#MapSum', () => {
  it('should work', () => {
    const mapSum = new MapSum();
    mapSum.insert('apple', 3);
    assert.strictEqual(mapSum.sum('ap'), 3);
    mapSum.insert('app', 2);
    assert.strictEqual(mapSum.sum('ap'), 5);
    assert.strictEqual(mapSum.sum('apple'), 3);
  });
});
