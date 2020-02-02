'use strict';

const assert = require('assert');
const _ = require('lodash');
const { arrayRankTransform } = require('./');

describe('#arrayRankTransform', () => {
  const tests = [
    {
      arr: [40, 10, 20, 30],
      result: [4, 1, 2, 3],
    },
  ];

  _.forEach(tests, ({ arr, result }) => {
    it(`${arr} -> ${result}`, () => {
      assert.deepStrictEqual(arrayRankTransform(arr), result);
    });
  });
});
