'use strict';

const assert = require('assert');
const _ = require('lodash');
const { heightChecker } = require('./');

describe('#heightChecker', () => {
  const tests = [
    {
      heights: [1, 1, 4, 2, 1, 3],
      result: 3,
    },
  ];

  _.forEach(tests, ({ heights, result }) => {
    it(`${heights} -> ${result}`, () => {
      assert.deepStrictEqual(heightChecker(heights), result);
    });
  });
});
