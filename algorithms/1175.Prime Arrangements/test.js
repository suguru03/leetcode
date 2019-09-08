'use strict';

const assert = require('assert');
const _ = require('lodash');
const { numPrimeArrangements } = require('./');

describe('#numPrimeArrangements', () => {
  const tests = [
    {
      n: 5,
      result: 12,
    },
    {
      n: 100,
      result: 682289015,
    },
  ];

  _.forEach(tests, ({ n, result }) => {
    it(`${n} -> ${result}`, () => {
      assert.deepStrictEqual(numPrimeArrangements(n), result);
    });
  });
});
