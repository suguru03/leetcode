'use strict';

const assert = require('assert');
const _ = require('lodash');

const { longestIncreasingPath } = require('./');

describe('#longestIncreasingPath', () => {
  const tests = [
    {
      matrix: [[9, 9, 4], [6, 6, 8], [2, 1, 1]],
      result: 4,
    },
    {
      matrix: [[3, 4, 5], [3, 2, 6], [2, 2, 1]],
      result: 4,
    },
  ];

  _.forEach(tests, ({ matrix, result }) => {
    it(`${matrix} -> ${result}`, () => {
      assert.deepStrictEqual(longestIncreasingPath(matrix), result);
    });
  });
});
