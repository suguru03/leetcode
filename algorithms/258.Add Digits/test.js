'use strict';

const assert = require('assert');
const _ = require('lodash');
const { addDigits } = require('./');

describe('#addDigits', () => {

  const tests = [{
    nums: 38,
    result: 2
  }, {
    nums: 121,
    result: 4
  }];

  _.forEach(tests, ({ nums, result }) => {
    it(`${nums} -> ${result}`, () => {
      assert.strictEqual(addDigits(nums), result);
    });
  });
});
