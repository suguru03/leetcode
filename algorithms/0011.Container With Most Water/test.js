'use strict';

const assert = require('assert');
const _ = require('lodash');
const { maxArea } = require('./');

describe('#maxArea', () => {
  const tests = [
    {
      height: [1, 1],
      result: 1,
    },
    {
      height: [1, 2, 3],
      result: 2,
    },
    {
      height: [1, 2, 5, 1],
      result: 3,
    },
    {
      height: [1, 0, 0, 0, 0, 0, 1],
      result: 6,
    },
  ];

  _.forEach(tests, ({ height, result }) => {
    it(`[${height}] -> ${result}`, () => {
      assert.strictEqual(maxArea(height), result);
    });
  });
});
