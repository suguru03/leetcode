'use strict';

const assert = require('assert');
const _ = require('lodash');
const { isPowerOfThree } = require('./');

describe('#isPowerOfThree', () => {

  const tests = [{
    n: 27,
    result: true
  }, {
    n: 6,
    result: false
  }];

  _.forEach(tests, ({ n, result }) => {
    it(`${n} -> ${result}`, () => {
      assert.strictEqual(isPowerOfThree(n), result);
    });
  });
});
