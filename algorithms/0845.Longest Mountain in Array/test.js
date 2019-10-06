'use strict';

const assert = require('assert');

const _ = require('lodash');

const { longestMountain } = require('./');

describe('#longestMountain', () => {
  const tests = [
    {
      A: [2, 1, 4, 7, 3, 2, 5],
      result: 5,
    },
    {
      A: [2, 2, 2],
      result: 0,
    },
    {
      A: [2, 2, 3, 2],
      result: 3,
    },
    {
      A: [0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0],
      result: 11,
    },
    {
      A: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
      result: 0,
    },
    {
      A: [2, 3, 3, 2, 0, 2],
      result: 0,
    },
    {
      A: [2, 2, 3, 4, 3, 2, 1, 1, 1, 2, 3, 4, 5, 3, 2, 1, 0],
      result: 9,
    },
    {
      A: [1, 1, 2, 3, 2, 1, 2, 1, 2, 3, 4, 5, 3, 2, 1],
      result: 8,
    },
    {
      A: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      result: 0,
    },
    {
      A: [0, 1, 0],
      result: 3,
    },
  ];

  _.forEach(tests, ({ A, result }) => {
    it(`A: ${A} => ${result}`, () => {
      assert.deepStrictEqual(longestMountain(A), result);
    });
  });
});
