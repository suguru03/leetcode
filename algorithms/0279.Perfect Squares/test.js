'use strict';

const assert = require('assert');
const _ = require('lodash');

const { numSquares } = require('./');

describe('#numSquares', () => {
  const tests = [
    {
      n: 12,
      result: 3,
    },
    {
      n: 13,
      result: 2,
    },
  ];

  _.forEach(tests, ({ n, result }) => {
    it(`${n} -> ${result}`, () => {
      assert.deepStrictEqual(numSquares(n), result);
    });
  });
});
