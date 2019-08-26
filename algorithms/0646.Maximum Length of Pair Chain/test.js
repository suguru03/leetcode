'use strict';

const assert = require('assert');
const _ = require('lodash');
const { findLongestChain } = require('./');

describe('#findLongestChain', () => {
  const tests = [
    {
      pairs: [[1, 2], [2, 3], [3, 4]],
      result: 2,
    },
    {
      pairs: [[1, 2], [1, 3], [2, 3], [3, 4]],
      result: 2,
    },
    {
      pairs: [[-6, 9], [1, 6], [8, 10], [-1, 4], [-6, -2], [-9, 8], [-5, 3], [0, 3]],
      result: 3,
    },
    {
      pairs: [[7, 9], [4, 5], [7, 9], [-7, -1], [0, 10], [3, 10], [3, 6], [2, 3]],
      result: 4,
    },
    {
      pairs: [[9, 10], [-1, 0], [-1, 4], [4, 6], [0, 6], [-9, 4]],
      result: 3,
    },
    {
      pairs: [[0, 4], [-4, 2], [-2, 1], [-7, -1], [-9, 4]],
      result: 2,
    },
  ];

  _.forEach(tests, ({ pairs, result }) => {
    it(`${pairs} -> ${result}`, () => {
      assert.deepStrictEqual(findLongestChain(pairs), result);
    });
  });
});
