'use strict';

const assert = require('assert');
const _ = require('lodash');
const { largestValsFromLabels } = require('./');

describe('#largestValsFromLabels', () => {
  const tests = [
    {
      values: [5, 4, 3, 2, 1],
      labels: [1, 1, 2, 2, 3],
      num_wanted: 3,
      use_limit: 1,
      result: 9,
    },
    {
      values: [5, 4, 3, 2, 1],
      labels: [1, 3, 3, 3, 2],
      num_wanted: 3,
      use_limit: 2,
      result: 12,
    },
    {
      values: [9, 8, 8, 7, 6],
      labels: [0, 0, 0, 1, 1],
      num_wanted: 3,
      use_limit: 1,
      result: 16,
    },
    {
      values: [9, 8, 8, 7, 6],
      labels: [0, 0, 0, 1, 1],
      num_wanted: 3,
      use_limit: 2,
      result: 24,
    },
    {
      values: [2, 6, 1, 2, 6],
      labels: [2, 2, 2, 1, 1],
      num_wanted: 1,
      use_limit: 1,
      result: 6,
    },
  ];

  _.forEach(tests, ({ values, labels, num_wanted, use_limit, result }) => {
    it(`${values}, ${labels}, ${num_wanted}, ${use_limit} -> ${result}`, () => {
      assert.deepStrictEqual(largestValsFromLabels(values, labels, num_wanted, use_limit), result);
    });
  });
});
