'use strict';

const assert = require('assert');
const _ = require('lodash');
const { longestPrefix } = require('./');

describe('#longestPrefix', () => {
  const tests = [
    {
      s: 'level',
      result: 'l',
    },
    {
      s: 'leetcodeleet',
      result: 'leet',
    },
    {
      s: 'a',
      result: '',
    },
    {
      s: 'ababab',
      result: 'abab',
    },
    {
      s: 'abcabaabcbcabbccacbabcabaabcbcab',
      result: 'abcabaabcbcab',
    },
  ];

  _.forEach(tests, ({ s, result }) => {
    it(`${s} -> ${result}`, () => {
      assert.deepStrictEqual(longestPrefix(s), result);
    });
  });
});
