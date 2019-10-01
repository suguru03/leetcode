'use strict';

const assert = require('assert');
const _ = require('lodash');
const { numPairsDivisibleBy60 } = require('./');

describe('#isUnivalTree', () => {
  const tests = [
    {
      time: [30, 20, 150, 100, 40],
      result: 3,
    },
    {
      time: [60, 60, 60],
      result: 3,
    },
  ];

  _.forEach(tests, ({ time, result }) => {
    it(`${time} -> ${result}`, () => {
      assert.deepStrictEqual(numPairsDivisibleBy60(time), result);
    });
  });
});
