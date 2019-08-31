'use strict';

const assert = require('assert');
const _ = require('lodash');
const { splitArraySameAverage } = require('./');

describe('#splitArraySameAverage', () => {
  const tests = [
    {
      A: [1, 2, 3, 4, 5, 6, 7, 8],
      result: true,
    },
    {
      A: [6, 8, 18, 3, 1],
      result: false,
    },
    {
      A: [33, 86, 88, 78, 21, 76, 19, 20, 88, 76, 10, 25, 37, 97, 58, 89, 65, 59, 98, 57, 50, 30, 58, 5, 61, 72, 23, 6],
      result: false,
    },
    {
      A: [1567, 2106, 4090, 293, 9642, 7740, 9159, 136, 3724, 1373, 9397, 3829, 1622, 1888, 7250, 8252, 12],
      result: true,
    },
    {
      A: [
        3863,
        703,
        1799,
        327,
        3682,
        4330,
        3388,
        6187,
        5330,
        6572,
        938,
        6842,
        678,
        9837,
        8256,
        6886,
        2204,
        5262,
        6643,
        829,
        745,
        8755,
        3549,
        6627,
        1633,
        4290,
        7,
      ],
      result: false,
    },
  ];

  _.forEach(tests, ({ A, result }) => {
    it(`[${A}] -> [${result}]`, () => {
      assert.deepStrictEqual(splitArraySameAverage(A), result);
    });
  });
});
