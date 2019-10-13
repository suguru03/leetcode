'use strict';

const assert = require('assert');
const _ = require('lodash');
const { countVowelPermutation } = require('./');

describe('#countVowelPermutation', () => {
  const tests = [
    {
      n: 1,
      result: 5,
    },
    {
      n: 2,
      result: 10,
    },
    {
      n: 5,
      result: 68,
    },
  ];

  _.forEach(tests, ({ n, result }) => {
    it(`${n} -> ${result}`, () => {
      assert.deepStrictEqual(countVowelPermutation(n), result);
    });
  });
});
