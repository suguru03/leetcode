'use strict';

const assert = require('assert');
const _ = require('lodash');
const { imageSmoother } = require('./');

describe('#imageSmoother', () => {
  const tests = [
    {
      M: [[1, 1, 1], [1, 0, 1], [1, 1, 1]],
      result: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
    },
    {
      M: [[3, 1, 3], [1, 3, 1], [1, 3, 1]],
      result: [[2, 2, 2], [2, 1, 2], [2, 1, 2]],
    },
  ];

  _.forEach(tests, ({ M, result }) => {
    it(`[${M}] -> [${result}]`, () => {
      assert.deepEqual(imageSmoother(M), result);
    });
  });
});
