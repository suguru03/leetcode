'use strict';

const assert = require('assert');
const _ = require('lodash');
const { judgeSquareSum } = require('./');

describe('#judgeSquareSum', () => {

  const tests = [{
    c: 5,
    result: true
  }, {
    c: 3,
    result: false
  }, {
    c: 4,
    result: true
  }, {
    c: 0,
    result: true
  }];

  _.forEach(tests, ({ c, result }) => {
    it(`${c} -> ${result}`, () => {
      assert.strictEqual(judgeSquareSum(c), result);
    });
  });
});
