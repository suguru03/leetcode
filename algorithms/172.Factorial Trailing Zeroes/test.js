'use strict';

const assert = require('assert');
const _ = require('lodash');
const { trailingZeroes } = require('./');

describe('#trailingZeroes', () => {

  const tests = [{
    n: 0,
    result: 0
  }, {
    n: 1,
    result: 0
  }, {
    n: 5,
    result: 1
  }, {
    n: 10,
    result: 2
  }, {
    n: 14,
    result: 2
  }, {
    n: 15,
    result: 3
  }, {
    n: 25,
    result: 6
  }, {
    n: 100,
    result: 24
  }];

  _.forEach(tests, ({ n, result }) => {
    it(`${n} -> ${result}`, () => {
      assert.strictEqual(trailingZeroes(n), result);
    });
  });
});
