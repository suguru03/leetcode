'use strict';

const assert = require('assert');
const _ = require('lodash');
const { prevPermOpt1 } = require('./');

describe('#prevPermOpt1', () => {
  const tests = [
    {
      A: [3, 2, 1],
      result: [3, 1, 2],
    },
    {
      A: [1, 1, 5],
      result: [1, 1, 5],
    },
    {
      A: [1, 9, 4, 6, 7],
      result: [1, 7, 4, 6, 9],
    },
    {
      A: [3, 1, 1, 3],
      result: [1, 3, 1, 3],
    },
  ];

  _.forEach(tests, ({ A, result }) => {
    it(`${A} -> ${result}`, () => {
      assert.deepStrictEqual(prevPermOpt1(A), result);
    });
  });
});
