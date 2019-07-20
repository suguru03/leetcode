'use strict';

const assert = require('assert');
const _ = require('lodash');
const { isToeplitzMatrix } = require('./');

describe('#isToeplitzMatrix', () => {
  const tests = [
    {
      matrix: [[1, 2, 3, 4], [5, 1, 2, 3], [9, 5, 1, 2]],
      result: true,
    },
    {
      matrix: [[1, 2], [2, 2]],
      result: false,
    },
  ];

  _.forEach(tests, ({ matrix, result }) => {
    it(`${matrix} -> ${result}`, () => {
      assert.deepStrictEqual(isToeplitzMatrix(matrix), result);
    });
  });
});
