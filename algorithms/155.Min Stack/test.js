'use strict';

const assert = require('assert');
const _ = require('lodash');
const { MinStack } = require('./');

describe('#MinStack', () => {

  it('should work push and  top', () => {
    const minStack = new MinStack();
    const n = 1;
    minStack.push(n);
    assert.strictEqual(minStack.top(), n);
  });

  it('should work', () => {
    const minStack = new MinStack();
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    assert.strictEqual(minStack.getMin(), -3);
    minStack.pop();
    assert.strictEqual(minStack.top(), 0);
    assert.strictEqual(minStack.getMin(), -2);
  });

  it('should work', () => {
    const minStack = new MinStack();
    minStack.push(-2);
    minStack.push(-4);
    minStack.push(0);
    minStack.push(-3);
    minStack.push(-4);
    minStack.push(-4);
    minStack.push(-5);
    assert.strictEqual(minStack.getMin(), -5);
    minStack.pop();
    assert.strictEqual(minStack.getMin(), -4);
    minStack.pop();
    assert.strictEqual(minStack.getMin(), -4);
    minStack.pop();
    assert.strictEqual(minStack.getMin(), -4);
    minStack.pop();
    assert.strictEqual(minStack.getMin(), -4);
    assert.strictEqual(minStack.top(), 0);
    assert.strictEqual(minStack.getMin(), -4);
  });

  it('should work', () => {
    const minStack = new MinStack();
    minStack.push(-1);
    minStack.pop();
    minStack.pop();
    assert.strictEqual(minStack.getMin(), undefined);
    minStack.push(0);
    assert.strictEqual(minStack.getMin(), 0);
  });

  it('should work getMin', () => {
    const minStack = new MinStack();
    _.times(10, n => minStack.push(n + 1));
    assert.strictEqual(minStack.getMin(), 1);
  });

});
