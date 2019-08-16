'use strict';

const assert = require('assert');
const { MyStack } = require('./');

describe('#MyStack', () => {
  it('should work', () => {
    const stack = new MyStack();
    assert.strictEqual(stack.empty(), true);
    assert.strictEqual(stack.push(1), undefined);
    assert.strictEqual(stack.pop(), 1);
    assert.strictEqual(stack.empty(), true);
  });
});
