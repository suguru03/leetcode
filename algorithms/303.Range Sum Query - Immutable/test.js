'use strict';

const assert = require('assert');
const { NumArray } = require('./');

describe('#NumArray', () => {
  it('[-2, 0, 3, -5, 2, -1] (0, 2) -> 1', () => {
    const array = [-2, 0, 3, -5, 2, -1];
    const numArray = new NumArray(array);
    assert.strictEqual(numArray.sumRange(0, 2), 1);
  });

  it('[-2, 0, 3, -5, 2, -1] (2, 5) -> -1', () => {
    const array = [-2, 0, 3, -5, 2, -1];
    const numArray = new NumArray(array);
    assert.strictEqual(numArray.sumRange(2, 5), -1);
  });

  it('[-2, 0, 3, -5, 2, -1] (0, 5) -> -3', () => {
    const array = [-2, 0, 3, -5, 2, -1];
    const numArray = new NumArray(array);
    assert.strictEqual(numArray.sumRange(0, 5), -3);
  });
});
