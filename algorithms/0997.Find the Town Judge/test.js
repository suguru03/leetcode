'use strict';

const assert = require('assert');
const _ = require('lodash');
const { findJudge } = require('./');

describe('#findJudge', () => {
  const tests = [
    {
      N: 2,
      trust: [[1, 2]],
      result: 2,
    },
    {
      N: 3,
      trust: [[1, 3], [2, 3]],
      result: 3,
    },
    {
      N: 4,
      trust: [[1, 3], [1, 4], [2, 3], [2, 4], [4, 3]],
      result: 3,
    },
    {
      N: 1,
      trust: [],
      result: 1,
    },
  ];

  _.forEach(tests, ({ N, trust, result }) => {
    it(`${N}, ${trust} -> ${result}`, () => {
      assert.deepStrictEqual(findJudge(N, trust), result);
    });
  });
});
