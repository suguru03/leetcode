'use strict';

const assert = require('assert');
const _ = require('lodash');
const { countSquares } = require('./');

describe('#countSquares', () => {
  const tests = [
    {
      matrix: [[0, 1, 1, 1], [1, 1, 1, 1], [0, 1, 1, 1]],
      result: 15,
    },
    {
      matrix: [[1, 0, 1], [1, 1, 0], [1, 1, 0]],
      result: 7,
    },
  ];

  _.forEach(tests, ({ matrix, result }) => {
    it(`${matrix} -> ${result}`, () => {
      assert.deepStrictEqual(countSquares(matrix), result);
    });
  });
});
