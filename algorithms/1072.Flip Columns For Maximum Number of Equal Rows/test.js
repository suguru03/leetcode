'use strict';

const assert = require('assert');
const _ = require('lodash');
const { maxEqualRowsAfterFlips } = require('./');

describe('#maxEqualRowsAfterFlips', () => {
  const tests = [
    {
      matrix: [[0, 1], [1, 1]],
      result: 1,
    },
    {
      matrix: [[0, 1], [1, 0]],
      result: 2,
    },
    {
      matrix: [[0, 0, 0], [0, 0, 1], [1, 1, 0]],
      result: 2,
    },
    {
      matrix: [
        [1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1],
        [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
        [1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1],
        [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
        [1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1],
      ],
      result: 2,
    },
  ];

  _.forEach(tests, ({ matrix, result }) => {
    it(`${matrix} -> ${result}`, () => {
      assert.deepStrictEqual(maxEqualRowsAfterFlips(matrix), result);
    });
  });
});
