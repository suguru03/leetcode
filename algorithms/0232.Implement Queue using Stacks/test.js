'use strict';

const assert = require('assert');
const { MyQueue } = require('./');

describe('#MyQueue', () => {
  it('should work', () => {
    const queue = new MyQueue();
    assert.strictEqual(queue.empty(), true);
    assert.strictEqual(queue.push(1), undefined);
    assert.strictEqual(queue.push(2), undefined);
    assert.strictEqual(queue.peek(), 1);
  });
});
