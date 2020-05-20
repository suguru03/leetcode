'use strict';

const assert = require('assert');

const { StockSpanner } = require('./');

describe('StockSpanner', () => {
  it('should work', () => {
    const S = new StockSpanner();
    assert.strictEqual(S.next(100), 1);
    assert.strictEqual(S.next(80), 1);
    assert.strictEqual(S.next(60), 1);
    assert.strictEqual(S.next(70), 2);
    assert.strictEqual(S.next(60), 1);
    assert.strictEqual(S.next(75), 4);
    assert.strictEqual(S.next(85), 6);
  });
});
