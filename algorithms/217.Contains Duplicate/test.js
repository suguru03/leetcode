'use strict';

const assert = require('assert');
const _ = require('lodash');
const { containsDuplicate } = require('./');

describe('#containsDuplicate', () => {

  const tests = [{
    nums: [1, 2, 2, 3],
    result: true
  }];

  _.forEach(tests, ({ nums, result }) => {
    it(`[${nums}] -> ${result}`, () => {
      assert.strictEqual(containsDuplicate(nums), result);
    });
  });
});
