'use strict';

const assert = require('assert');
const _ = require('lodash');
const { duplicateZeros } = require('./');

describe('#duplicateZeros', () => {
  const tests = [
    {
      arr: [1, 0, 2, 3, 0, 4, 5, 0],
      result: [1, 0, 0, 2, 3, 0, 0, 4],
    },
    {
      arr: [1, 2, 3],
      result: [1, 2, 3],
    },
    {
      arr: [1, 0, 0, 2, 3, 0, 4, 5, 0],
      result: [1, 0, 0, 0, 0, 2, 3, 0, 0],
    },
  ];

  _.forEach(tests, ({ arr, result }) => {
    it(`${arr} -> ${result}`, () => {
      duplicateZeros(arr);
      assert.deepStrictEqual(arr, result);
    });
  });
});
