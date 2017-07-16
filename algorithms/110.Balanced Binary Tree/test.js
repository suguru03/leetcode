'use strict';

const assert = require('assert');
const _ = require('lodash');
const { isBalanced } = require('./');

describe('#isBalanced', () => {

  const tests = [{
    n: 1,
    result: 1
  }, {
    n: 2,
    result: 2
  }];

  _.forEach(tests, ({ n, result }) => {
    it(`${n} -> ${result}`, () => {
      assert.strictEqual(isBalanced(n), result);
    });
  });
});
