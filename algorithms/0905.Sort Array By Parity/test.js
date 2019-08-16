'use strict';

const assert = require('assert');
const _ = require('lodash');
const { sortArrayByParity } = require('./');

describe('#sortArrayByParity', () => {
  const tests = [
    {
      A: [3, 1, 2, 4],
      result: [4, 2, 1, 3],
    },
  ];

  _.forEach(tests, ({ A, result }) => {
    it(`${A} -> ${result}`, () => {
      assert.deepStrictEqual(sortArrayByParity(A), result);
    });
  });
});
