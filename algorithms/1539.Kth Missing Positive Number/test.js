'use strict';

const assert = require('assert');
const _ = require('lodash');

const { findKthPositive } = require('./');

describe('#findKthPositive', () => {
  const tests = [
    {
      arr: [2, 3, 4, 7, 11],
      k: 5,
      result: 9,
    },
    {
      arr: [1, 2, 3, 4],
      k: 2,
      result: 6,
    },
    {
      arr: [5],
      k: 1,
      result: 1,
    },
    {
      arr: [1],
      k: 2,
      result: 3,
    },
    {
      arr: Array.from({ length: 1000 }, (_, i) => i + 1),
      k: 100,
      result: 1100,
    },
  ];

  _.forEach(tests, ({ arr, k, result }) => {
    it(`${arr}, ${k} -> ${result}`, () => {
      assert.deepStrictEqual(findKthPositive(arr, k), result);
    });
  });
});
