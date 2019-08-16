'use strict';

const assert = require('assert');
const _ = require('lodash');
const { twoSum } = require('./');

describe('#twoSum', () => {
  const tests = [
    {
      numbers: [2, 3, 4],
      target: 6,
      result: [1, 3],
    },
    {
      numbers: [2, 7, 11, 15],
      target: 9,
      result: [1, 2],
    },
    {
      numbers: [2, 7, 11, 15],
      target: 3,
      result: [0, 0],
    },
    {
      numbers: [2, 4, 7, 11, 15],
      target: 4,
      result: [0, 0],
    },
    {
      numbers: [-1, 0],
      target: -1,
      result: [1, 2],
    },
  ];

  _.forEach(tests, ({ numbers, target, result }) => {
    it(`[${numbers}], ${target} -> ${result}`, () => {
      assert.deepEqual(twoSum(numbers, target), result);
    });
  });
});
