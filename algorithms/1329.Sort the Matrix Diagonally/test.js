'use strict';

const assert = require('assert');
const _ = require('lodash');
const { diagonalSort } = require('./');

describe('#diagonalSort', () => {
  const tests = [
    {
      mat: [[3, 3, 1, 1], [2, 2, 1, 2], [1, 1, 1, 2]],
      result: [[1, 1, 1, 1], [1, 2, 2, 2], [1, 2, 3, 3]],
    },
  ];

  _.forEach(tests, ({ mat, result }) => {
    it(`${mat} -> ${result}`, () => {
      assert.deepStrictEqual(diagonalSort(mat), result);
    });
  });
});
