'use strict';

const assert = require('assert');
const _ = require('lodash');
const { gardenNoAdj } = require('./');

describe('#gardenNoAdj', () => {
  const tests = [
    {
      N: 3,
      paths: [[1, 2], [2, 3], [3, 1]],
      result: [1, 2, 3],
    },
    {
      N: 4,
      paths: [[1, 2], [3, 4]],
      result: [1, 2, 1, 2],
    },
    {
      N: 4,
      paths: [[1, 2], [2, 3], [3, 4], [4, 1], [1, 3], [2, 4]],
      result: [1, 2, 3, 4],
    },
    {
      N: 1,
      paths: [],
      result: [1],
    },
    {
      N: 5,
      paths: [[3, 4], [4, 5], [3, 2], [5, 1], [1, 3], [4, 2]],
      result: [1, 1, 2, 3, 2],
    },
  ];

  _.forEach(tests, ({ N, paths, result }) => {
    it(`${N}, ${paths} -> ${result}`, () => {
      assert.deepStrictEqual(gardenNoAdj(N, paths), result);
    });
  });
});
