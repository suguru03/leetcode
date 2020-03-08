'use strict';

const assert = require('assert');
const _ = require('lodash');
const { smallerNumbersThanCurrent } = require('./');

describe('#smallerNumbersThanCurrent', () => {
  const tests = [
    {
      nums: [8, 1, 2, 2, 3],
      result: [4, 0, 1, 1, 3],
    },
  ];

  _.forEach(tests, ({ nums, result }) => {
    it(`${nums} -> ${result}`, () => {
      assert.deepStrictEqual(smallerNumbersThanCurrent(nums), result);
    });
  });
});
