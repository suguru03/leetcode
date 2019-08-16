'use strict';

const assert = require('assert');
const _ = require('lodash');
const { minDeletionSize } = require('./');

describe('#minDeletionSize', () => {
  const tests = [
    {
      A: ['cba', 'daf', 'ghi'],
      result: 1,
    },
    {
      A: ['a', 'b'],
      result: 0,
    },
    {
      A: ['zyx', 'wvu', 'tsr'],
      result: 3,
    },
  ];

  _.forEach(tests, ({ A, result }) => {
    it(`${A} -> ${result}`, () => {
      assert.deepStrictEqual(minDeletionSize(A), result);
    });
  });
});
