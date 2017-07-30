'use strict';

const assert = require('assert');
const _ = require('lodash');
const { minSteps } = require('./');

describe('#minSteps', () => {

  const tests = [{
    n: 2,
    result: 2
  }, {
    n: 3,
    result: 3
  }, {
    n: 4,
    result: 4
  }, {
    n: 7,
    result: 7
  }, {
    n: 10,
    result: 7
  }];

  _.forEach(tests, ({ n, result }) => {
    it(`${n} -> ${result}`, () => {
      assert.strictEqual(minSteps(n), result);
    });
  });
});
