'use strict';

const assert = require('assert');
const _ = require('lodash');
const { maxSubarraySumCircular } = require('./');

describe('#maxSubarraySumCircular', () => {
  const tests = [
    {
      A: [1, -2, 3, -2],
      result: 3,
    },
    {
      A: [5, -3, 5],
      result: 10,
    },
    {
      A: [3, -1, 2, -1],
      result: 4,
    },
    {
      A: [-2, -3, -1],
      result: -1,
    },
    {
      A: [2, -2, 2, 7, 8, 0],
      result: 19,
    },
    {
      A: [-2],
      result: -2,
    },
    {
      A: [9, 7, -6, 7, 9, -10, 5, 9, 0, -1],
      result: 39,
    },
    {
      A: [-5, 3, 5],
      result: 8,
    },
    {
      A: [9, -4, -7, 9],
      result: 18,
    },
    {
      A: [-7, 1, 2, 7, -2, -5],
      result: 10,
    },
  ];

  _.forEach(tests, ({ A, result }) => {
    it(`${A} -> ${result}`, () => {
      assert.deepStrictEqual(maxSubarraySumCircular(A), result);
    });
  });
});
