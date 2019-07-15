'use strict';

const assert = require('assert');
const _ = require('lodash');
const { relativeSortArray } = require('./');

describe('#relativeSortArray', () => {
  const tests = [
    {
      arr1: [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19],
      arr2: [2, 1, 4, 3, 9, 6],
      result: [2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19],
    },
    {
      arr1: [28, 6, 22, 8, 44, 17],
      arr2: [22, 28, 8, 6],
      result: [22, 28, 8, 6, 17, 44],
    },
  ];

  _.forEach(tests, ({ arr1, arr2, result }) => {
    it(`${arr1}, ${arr2} -> ${result}`, () => {
      assert.deepStrictEqual(relativeSortArray(arr1, arr2), result);
    });
  });
});
