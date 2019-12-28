'use strict';

const assert = require('assert');
const _ = require('lodash');
const { reverseParentheses } = require('./');

describe('#reverseParentheses', () => {
  const tests = [
    {
      s: '(abcd)',
      result: 'dcba',
    },
    {
      s: '(u(love)i)',
      result: 'iloveu',
    },
    {
      s: '(ed(et(oc))el)',
      result: 'leetcode',
    },
    {
      s: 'a(bcdefghijkl(mno)p)q',
      result: 'apmnolkjihgfedcbq',
    },
  ];

  _.forEach(tests, ({ s, result }) => {
    it(`${s} -> ${result}`, () => {
      assert.deepStrictEqual(reverseParentheses(s), result);
    });
  });
});
