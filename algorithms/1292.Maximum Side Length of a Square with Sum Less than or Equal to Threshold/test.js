'use strict';

const assert = require('assert');
const _ = require('lodash');
const { maxSideLength } = require('./');

describe('#maxSideLength', () => {
  const tests = [
    {
      mat: [[1, 1, 3, 2, 4, 3, 2], [1, 1, 3, 2, 4, 3, 2], [1, 1, 3, 2, 4, 3, 2]],
      threshold: 4,
      result: 2,
    },
    {
      mat: [[1, 1, 1, 1], [1, 0, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0]],
      threshold: 6,
      result: 3,
    },
    {
      mat: [[2, 2, 2, 2, 2], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2]],
      threshold: 1,
      result: 0,
    },
    {
      mat: [[18, 70], [61, 1], [25, 85], [14, 40], [11, 96], [97, 96], [63, 45]],
      threshold: 40184,
      result: 2,
    },
  ];

  _.forEach(tests, ({ mat, threshold, result }) => {
    it(`${mat}, ${threshold} -> ${result}`, () => {
      assert.deepStrictEqual(maxSideLength(mat, threshold), result);
    });
  });
});
