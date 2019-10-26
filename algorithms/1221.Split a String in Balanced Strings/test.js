'use strict';

const assert = require('assert');
const _ = require('lodash');
const { balancedStringSplit } = require('./');

describe('#balancedStringSplit', () => {
  const tests = [
    {
      s: 'RLRRLLRLRL',
      result: 4,
    },
  ];

  _.forEach(tests, ({ s, result }) => {
    it(`${s} -> ${result}`, () => {
      assert.deepStrictEqual(balancedStringSplit(s), result);
    });
  });
});
