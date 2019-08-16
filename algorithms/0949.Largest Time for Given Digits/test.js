'use strict';

const assert = require('assert');
const _ = require('lodash');
const { largestTimeFromDigits } = require('./');

describe('#largestTimeFromDigits', () => {
  const tests = [
    {
      A: [1, 2, 3, 4],
      result: '23:41',
    },
    {
      A: [5, 5, 5, 5],
      result: '',
    },
    {
      A: [0, 0, 3, 4],
      result: '04:30',
    },
    {
      A: [0, 0, 1, 0],
      result: '10:00',
    },
    {
      A: [0, 0, 0, 0],
      result: '00:00',
    },
    {
      A: [1, 9, 6, 0],
      result: '19:06',
    },
    {
      A: [2, 0, 6, 6],
      result: '06:26',
    },
  ];

  _.forEach(tests, ({ A, result }) => {
    it(`${A} -> ${result}`, () => {
      assert.deepStrictEqual(largestTimeFromDigits(A), result);
    });
  });
});
