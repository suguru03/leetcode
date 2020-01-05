'use strict';

const assert = require('assert');
const _ = require('lodash');
const { sumZero } = require('./');

describe('#sumZero', () => {
  const tests = [
    {
      n: 5,
      result: [0, -1, 1, -2, 2],
    },
  ];

  _.forEach(tests, ({ n, result }) => {
    it(`${n} -> ${result}`, () => {
      assert.deepStrictEqual(sumZero(n), result);
    });
  });
});
