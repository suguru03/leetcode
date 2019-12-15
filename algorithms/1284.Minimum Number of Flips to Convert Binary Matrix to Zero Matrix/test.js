'use strict';

const assert = require('assert');
const _ = require('lodash');
const { minFlips } = require('./');

describe('#minFlips', () => {
  const tests = [
    {
      mat: [[0, 0], [0, 1]],
      result: 3,
    },
    {
      mat: [[0]],
      result: 0,
    },
    {
      mat: [[1, 1, 1], [1, 0, 1], [0, 0, 0]],
      result: 6,
    },
    {
      mat: [[1, 0, 0], [1, 0, 0]],
      result: -1,
    },
  ];

  _.forEach(tests, ({ mat, result }) => {
    it(`${mat} -> ${result}`, () => {
      assert.deepStrictEqual(minFlips(mat), result);
    });
  });
});
