'use strict';

const assert = require('assert');
const _ = require('lodash');

const { kthSmallest } = require('./');

describe('#kthSmallest', () => {
  const tests = [
    {
      matrix: [[1, 5, 9], [10, 11, 13], [12, 13, 15]],
      k: 8,
      result: 13,
    },
    {
      matrix: [[1, 5, 9], [10, 11, 13], [12, 13, 15]],
      k: 4,
      result: 10,
    },
  ];

  _.forEach(tests, ({ matrix, k, result }) => {
    it(`${matrix}, ${k} -> ${result}`, () => {
      assert.deepStrictEqual(kthSmallest(matrix, k), result);
    });
  });
});
