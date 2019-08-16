'use strict';

const assert = require('assert');
const _ = require('lodash');
const { kthGrammar } = require('./');

describe('#kthGrammar', () => {
  const tests = [
    {
      N: 2,
      K: 1,
      result: 0,
    },
    {
      N: 4,
      K: 5,
      result: 1,
    },
    {
      N: 5,
      K: 11,
      result: 0,
    },
    {
      N: 5,
      K: 12,
      result: 1,
    },
  ];

  _.forEach(tests, ({ N, K, result }) => {
    it(`${N}, ${K} -> ${result}`, () => {
      assert.deepStrictEqual(kthGrammar(N, K), result);
    });
  });
});
