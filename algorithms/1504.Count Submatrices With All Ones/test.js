'use strict';

const assert = require('assert');
const _ = require('lodash');

const { numSubmat } = require('./');

describe('#numSubmat', () => {
  const tests = [
    {
      mat: [[1, 0, 1], [1, 1, 0], [1, 1, 0]],
      result: 13,
    },
    {
      mat: [[0, 1, 1, 0], [0, 1, 1, 1], [1, 1, 1, 0]],
      result: 24,
    },
  ];

  _.forEach(tests, ({ mat, result }) => {
    it(`${mat} -> ${result}`, () => {
      assert.deepStrictEqual(numSubmat(mat), result);
    });
  });
});
