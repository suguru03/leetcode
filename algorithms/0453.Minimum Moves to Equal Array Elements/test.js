'use strict';

const assert = require('assert');
const _ = require('lodash');
const { minMoves } = require('./');

describe('#minMoves', () => {
  const tests = [
    {
      nums: [1, 2, 3],
      result: 3,
    },
  ];

  _.forEach(tests, ({ nums, result }) => {
    it(`${nums} -> ${result}`, () => {
      assert.deepStrictEqual(minMoves(nums), result);
    });
  });
});
