'use strict';

const assert = require('assert');
const _ = require('lodash');
const { circularPermutation } = require('./');

describe('#circularPermutation', () => {
  const tests = [
    {
      n: 2,
      start: 3,
      result: [3, 2, 0, 1],
    },
    {
      n: 3,
      start: 2,
      result: [2, 6, 7, 5, 4, 0, 1, 3],
    },
  ];

  _.forEach(tests, ({ n, start, result }) => {
    it(`${n}, ${start} -> ${result}`, () => {
      assert.deepStrictEqual(circularPermutation(n, start), result);
    });
  });
});
