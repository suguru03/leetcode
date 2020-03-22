'use strict';

const assert = require('assert');
const _ = require('lodash');
const { sumFourDivisors } = require('./');

describe('#sumFourDivisors', () => {
  const tests = [
    {
      nums: [21, 4, 7],
      result: 32,
    },
  ];

  _.forEach(tests, ({ nums, result }) => {
    it(`${nums} -> ${result}`, () => {
      assert.deepStrictEqual(sumFourDivisors(nums), result);
    });
  });
});
