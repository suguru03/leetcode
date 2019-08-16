'use strict';

const assert = require('assert');

const _ = require('lodash');

const { longestMountain } = require('./');

describe('#longestMountain', () => {
  const tests = [
    {
      A: [2, 1, 4, 7, 3, 2, 5],
      result: 5,
    },
    {
      A: [2, 2, 2],
      result: 0,
    },
  ];

  _.forEach(tests, ({ A, result }) => {
    it(`A: ${A} => ${result}`, () => {
      assert.deepStrictEqual(longestMountain(A), result);
    });
  });
});
