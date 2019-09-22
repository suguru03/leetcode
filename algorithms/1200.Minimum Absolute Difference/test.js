'use strict';

const assert = require('assert');
const _ = require('lodash');
const { minimumAbsDifference } = require('./');

describe('#minimumAbsDifference', () => {
  const tests = [
    {
      arr: [4, 2, 1, 3],
      result: [[1, 2], [2, 3], [3, 4]],
    },
  ];

  _.forEach(tests, ({ arr, result }) => {
    it(`${arr} -> ${result}`, () => {
      assert.deepStrictEqual(minimumAbsDifference(arr), result);
    });
  });
});
