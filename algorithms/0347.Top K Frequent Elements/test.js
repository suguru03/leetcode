'use strict';

const assert = require('assert');
const _ = require('lodash');
const { topKFrequent } = require('./');

describe('#topKFrequent', () => {
  const tests = [
    {
      nums: [1, 1, 1, 2, 2, 3],
      k: 2,
      result: [1, 2],
    },
  ];

  _.forEach(tests, ({ nums, k, result }) => {
    it(`${nums}, ${k} -> ${result}`, () => {
      assert.deepStrictEqual(topKFrequent(nums, k), result);
    });
  });
});
