'use strict';

const assert = require('assert');
const _ = require('lodash');
const { maximumSum } = require('./');

describe('#maximumSum', () => {
  const tests = [
    {
      arr: [1, -2, 0, 3],
      result: 4,
    },
    {
      arr: [4, -2, 3, -2, 3, -2, 5],
      result: 11,
    },
    {
      arr: [8, -1, 6, -7, -4, 5, -4, 7, -6],
      result: 17,
    },
  ];

  _.forEach(tests, ({ arr, result }) => {
    it(`${arr} -> ${result}`, () => {
      assert.deepStrictEqual(maximumSum(arr), result);
    });
  });
});
