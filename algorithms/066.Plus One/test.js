'use strict';

const assert = require('assert');
const _ = require('lodash');
const { plusOne } = require('./');

describe('#plusOne', () => {
  const tests = [
    {
      digits: [0],
      result: [1],
    },
    {
      digits: [1, 2, 3],
      result: [1, 2, 4],
    },
    {
      digits: [9, 9, 9],
      result: [1, 0, 0, 0],
    },
    {
      digits: [0, 9],
      result: [1, 0],
    },
    {
      digits: [],
      result: [1],
    },
  ];

  _.forEach(tests, ({ digits, result }) => {
    it(`[${digits}] -> [${result}]`, () => {
      assert.deepEqual(plusOne(digits), result);
    });
  });
});
