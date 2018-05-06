'use strict';

const assert = require('assert');

const _ = require('lodash');

const { maskPII } = require('./');

describe('#maskPII', () => {
  const tests = [
    {
      S: 'LeetCode@LeetCode.com',
      result: 'l*****e@leetcode.com',
    },
    {
      S: 'AB@qq.com',
      result: 'a*****b@qq.com',
    },
    {
      S: '1(234)567-890',
      result: '***-***-7890',
    },
    {
      S: '86-(10)12345678',
      result: '+**-***-***-5678',
    },
  ];

  _.forEach(tests, ({ S, result }) => {
    it(`S: ${S} => ${result}`, () => {
      assert.deepStrictEqual(maskPII(S), result);
    });
  });
});
