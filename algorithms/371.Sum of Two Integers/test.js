'use strict';

const assert = require('assert');
const _ = require('lodash');
const { getSum } = require('./');

describe('#getSum', () => {

  const tests = [{
    a: 1,
    b: 2,
    result: 3
  }, {
    a: 2,
    b: 2,
    result: 4
  }, {
    a: -1,
    b: -2,
    result: -3
  }, {
    a: 1,
    b: -2,
    result: -1
  }];

  _.forEach(tests, ({ a, b, result }) => {
    it(`${a} + ${b} -> ${result}`, () => {
      assert.strictEqual(getSum(a, b), result);
    });
  });
});
