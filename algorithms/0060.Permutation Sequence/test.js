'use strict';

const assert = require('assert');
const _ = require('lodash');
const { getPermutation } = require('./');

describe('#getPermutation', () => {
  const tests = [
    {
      n: 3,
      k: 3,
      result: '213',
    },
    {
      n: 4,
      k: 9,
      result: '2314',
    },
  ];

  _.forEach(tests, ({ n, k, result }) => {
    it(`${n}, ${k} -> ${result}`, () => {
      assert.deepStrictEqual(getPermutation(n, k), result);
    });
  });
});
