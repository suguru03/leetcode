'use strict';

const assert = require('assert');
const _ = require('lodash');
const { climbStairs } = require('./');

describe('#climbStairs', () => {

  const tests = [{
    n: 0,
    result: 0
  }, {
    n: 1,
    result: 1
  }, {
    n: 4,
    result: 5
  }, {
    n: 10,
    result: 89
  }, {
    n: 40,
    result: 165580141
  }, {
    n: 100,
    result: 573147844013817200640
  }];

  _.forEach(tests, ({ n, result }) => {
    it(`${n} -> ${result}`, () => {
      assert.strictEqual(climbStairs(n), result);
    });
  });
});
