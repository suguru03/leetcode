'use strict';

const assert = require('assert');
const _ = require('lodash');
const { longestValidParentheses } = require('./');

describe('#longestValidParentheses', () => {
  const tests = [
    {
      s: '(()',
      result: 2,
    },
    {
      s: ')()())',
      result: 4,
    },
  ];

  _.forEach(tests, ({ s, result }) => {
    it(`${s} -> ${result}`, () => {
      assert.deepStrictEqual(longestValidParentheses(s), result);
    });
  });
});
