'use strict';

const assert = require('assert');
const _ = require('lodash');
const { grayCode } = require('./');

describe('#grayCode', () => {
  const tests = [
    {
      n: 2,
      result: [0, 1, 3, 2],
    },
  ];

  _.forEach(tests, ({ n, result }) => {
    it(`${n} -> ${result}`, () => {
      assert.deepStrictEqual(grayCode(n), result);
    });
  });
});
