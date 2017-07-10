'use strict';

const assert = require('assert');
const _ = require('lodash');
const { mySqrt } = require('./');

describe('#mySqrt', () => {

  const tests = [{
    x: 4,
    result: 2
  }, {
    x: 3,
    result: 1
  }, {
    x: 10,
    result: 3
  }];

  _.forEach(tests, ({ x, result }) => {
    it(`${x} -> ${result}`, () => {
      assert.strictEqual(mySqrt(x), result);
    });
  });
});
