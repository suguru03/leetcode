'use strict';

const assert = require('assert');
const _ = require('lodash');

const { canMakeArithmeticProgression } = require('./');

describe('#canMakeArithmeticProgression', () => {
  const tests = [
    {
      arr: [3, 5, 1],
      result: true,
    },
    {
      arr: [1, 2, 4],
      result: false,
    },
    {
      arr: [1, 1, 1],
      result: true,
    },
    {
      arr: [2, 10, 7, 8, 3],
      result: false,
    },
  ];

  _.forEach(tests, ({ arr, result }) => {
    it(`${arr} -> ${result}`, () => {
      assert.deepStrictEqual(canMakeArithmeticProgression(arr), result);
    });
  });
});
