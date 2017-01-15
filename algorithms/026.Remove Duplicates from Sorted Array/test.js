'use strict';

const assert = require('assert');
const _ = require('lodash');
const { removeDuplicates } = require('./');

describe('#removeDuplicates', () => {

  const tests = [{
    nums: [1, 1, 2],
    result: 2
  }, {
    nums: [],
    result: 0
  }, {
    nums: [1, 1, 2, 2, 3, 3, 4, 4, 4],
    result: 4
  }];

  _.forEach(tests, ({ nums, result }) => {
    it(`[${nums}] -> ${result}`, () => {
      assert.strictEqual(removeDuplicates(nums), result);
    });
  });
});
