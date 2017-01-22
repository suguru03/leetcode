'use strict';

const assert = require('assert');
const _ = require('lodash');
const { PredictTheWinner } = require('./');

describe('#PredictTheWinner', () => {

  const tests = [{
    nums: [1, 5, 2],
    result: false
  }, {
    nums: [1, 5, 233, 7],
    result: true
  }, {
    nums: [1, 232, 233, 7],
    result: true
  }, {
    nums: [232, 233, 7, 1],
    result: true
  }];

  _.forEach(tests, ({ nums, result }) => {
    it(`${nums} -> ${result}`, () => {
      assert.deepEqual(PredictTheWinner(nums), result);
    });
  });
});
