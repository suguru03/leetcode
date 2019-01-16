'use strict';

const assert = require('assert');
const _ = require('lodash');
const { majorityElement } = require('./');

describe('#majorityElement', () => {
  const tests = [
    {
      nums: [1, 1, 2],
      result: 1,
    },
    {
      nums: [0, 1, 1, 1, 4, 1, 2],
      result: 1,
    },
  ];

  _.forEach(tests, ({ nums, result }) => {
    it(`${nums} -> ${result}`, () => {
      assert.strictEqual(majorityElement(nums), result);
    });
  });
});
