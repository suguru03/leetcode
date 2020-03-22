'use strict';

const assert = require('assert');
const _ = require('lodash');
const { findTheDistanceValue } = require('./');

describe('#findTheDistanceValue', () => {
  const tests = [
    {
      arr1: [4, 5, 8],
      arr2: [10, 9, 1, 8],
      d: 2,
      result: 2,
    },
  ];

  _.forEach(tests, ({ arr1, arr2, d, result }) => {
    it(`${arr1}, ${arr2}, ${d} -> ${result}`, () => {
      assert.deepStrictEqual(findTheDistanceValue(arr1, arr2, d), result);
    });
  });
});
