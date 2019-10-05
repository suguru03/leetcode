'use strict';

const assert = require('assert');
const _ = require('lodash');
const { flipAndInvertImage } = require('./');

describe('#flipAndInvertImage', () => {
  const tests = [
    {
      A: [[1, 1, 0], [1, 0, 1], [0, 0, 0]],
      result: [[1, 0, 0], [0, 1, 0], [1, 1, 1]],
    },
    {
      A: [[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]],
      result: [[1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 0, 1], [1, 0, 1, 0]],
    },
  ];

  _.forEach(tests, ({ A, result }) => {
    it(`${A} -> ${result}`, () => {
      assert.deepStrictEqual(flipAndInvertImage(A), result);
    });
  });
});
