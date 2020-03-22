'use strict';

const assert = require('assert');
const _ = require('lodash');
const { maxNumberOfFamilies } = require('./');

describe('#maxNumberOfFamilies', () => {
  const tests = [
    {
      n: 3,
      reservedSeats: [[1, 2], [1, 3], [1, 8], [2, 6], [3, 1], [3, 10]],
      result: 4,
    },
    {
      n: 4,
      reservedSeats: [[4, 3], [1, 4], [4, 6], [1, 7]],
      result: 4,
    },
    {
      n: 2,
      reservedSeats: [[2, 1], [1, 8], [2, 6]],
      result: 2,
    },
  ];

  _.forEach(tests, ({ n, reservedSeats, result }) => {
    it(`${n}, ${reservedSeats} -> ${result}`, () => {
      assert.deepStrictEqual(maxNumberOfFamilies(n, reservedSeats), result);
    });
  });
});
