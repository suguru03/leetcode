'use strict';

const assert = require('assert');
const _ = require('lodash');
const { uniquePaths } = require('./');

describe('#uniquePaths', () => {
  const tests = [
    {
      m: 3,
      n: 2,
      result: 3,
    },
    {
      m: 7,
      n: 3,
      result: 28,
    },
  ];

  _.forEach(tests, ({ m, n, result }) => {
    it(`${m}, ${n} -> ${result}`, () => {
      assert.deepStrictEqual(uniquePaths(m, n), result);
    });
  });
});
