'use strict';

const assert = require('assert');
const _ = require('lodash');
const { checkIfExist } = require('./');

describe('#checkIfExist', () => {
  const tests = [
    {
      arr: [10, 2, 5, 3],
      result: true,
    },
    {
      arr: [7, 1, 14, 11],
      result: true,
    },
    {
      arr: [3, 1, 7, 11],
      result: false,
    },
  ];

  _.forEach(tests, ({ arr, result }) => {
    it(`${arr} -> ${result}`, () => {
      assert.deepStrictEqual(checkIfExist(arr), result);
    });
  });
});
