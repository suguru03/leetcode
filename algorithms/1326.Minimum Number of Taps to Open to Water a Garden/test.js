'use strict';

const assert = require('assert');
const _ = require('lodash');
const { minTaps } = require('./');

describe('#minTaps', () => {
  const tests = [
    {
      n: 5,
      ranges: [3, 4, 1, 1, 0, 0],
      result: 1,
    },
    {
      n: 3,
      ranges: [0, 0, 0, 0],
      result: -1,
    },
    {
      n: 8,
      ranges: [4, 0, 0, 0, 0, 0, 0, 0, 4],
      result: 2,
    },
    {
      n: 8,
      ranges: [4, 0, 0, 0, 4, 0, 0, 0, 4],
      result: 1,
    },
    {
      n: 9,
      ranges: [0, 5, 0, 3, 3, 3, 1, 4, 0, 4],
      result: 2,
    },
    {
      n: 7,
      ranges: [1, 2, 1, 0, 2, 1, 0, 1],
      result: 3,
    },
    {
      n: 35,
      ranges: [
        1,
        0,
        4,
        0,
        4,
        1,
        4,
        3,
        1,
        1,
        1,
        2,
        1,
        4,
        0,
        3,
        0,
        3,
        0,
        3,
        0,
        5,
        3,
        0,
        0,
        1,
        2,
        1,
        2,
        4,
        3,
        0,
        1,
        0,
        5,
        2,
      ],
      result: 6,
    },
  ];

  _.forEach(tests, ({ n, ranges, result }) => {
    it(`${n}, ${ranges} -> ${result}`, () => {
      assert.deepStrictEqual(minTaps(n, ranges), result);
    });
  });
});
