'use strict';

const assert = require('assert');
const _ = require('lodash');
const { subtractProductAndSum } = require('./');

describe('#subtractProductAndSum', () => {
  const tests = [
    {
      n: 234,
      result: 15,
    },
    {
      n: 4421,
      result: 21,
    },
  ];

  _.forEach(tests, ({ n, result }) => {
    it(`${n} -> ${result}`, () => {
      assert.deepStrictEqual(subtractProductAndSum(n), result);
    });
  });
});
