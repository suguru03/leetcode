'use strict';

const assert = require('assert');
const _ = require('lodash');

const { getLastMoment } = require('./');

describe('#getLastMoment', () => {
  const tests = [
    {
      n: 4,
      left: [4, 3],
      right: [0, 1],
      result: 4,
    },
  ];

  _.forEach(tests, ({ n, left, right, result }) => {
    it(`${n}, ${left}, ${right} -> ${result}`, () => {
      assert.deepStrictEqual(getLastMoment(n, left, right), result);
    });
  });
});
