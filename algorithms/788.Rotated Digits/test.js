'use strict';

const assert = require('assert');
const _ = require('lodash');
const { rotatedDigits } = require('./');

describe('#rotatedDigits', () => {
  const tests = [
    {
      N: 10,
      result: 4,
    },
    {
      N: 857,
      result: 247,
    },
  ];

  _.forEach(tests, ({ N, result }) => {
    it(`${N} -> ${result}`, () => {
      assert.deepStrictEqual(rotatedDigits(N), result);
    });
  });
});
