'use strict';

const assert = require('assert');
const _ = require('lodash');
const { permute } = require('./');

describe('#permute', () => {
  const tests = [
    {
      nums: [1, 2, 3],
      result: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]],
    },
  ];

  _.forEach(tests, ({ nums, result }) => {
    it(`${nums} -> ${result}`, () => {
      assert.deepStrictEqual(permute(nums), result);
    });
  });
});
