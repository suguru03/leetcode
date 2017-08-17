'use strict';

const assert = require('assert');
const _ = require('lodash');
const { newInteger } = require('./');

describe('#newInteger', () => {

  const tests = [{
    n: 9,
    result: 10
  }, {
    n: 8,
    result: 8
  }, {
    n: 19,
    result: 21
  }, {
    n: 39,
    result: 43
  }, {
    n: 99,
    result: 120
  }, {
    n: 190,
    result: 231
  }, {
    n: 999,
    result: 1330
  }, {
    n: 90000000,
    result: 207313710
  }, {
    n: 95000000,
    result: 217674445
  }];

  _.forEach(tests, ({ n, result }) => {
    it(`${n} -> ${result}`, () => {
      assert.strictEqual(newInteger(n), result);
    });
  });
});
