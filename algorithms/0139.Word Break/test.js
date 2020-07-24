'use strict';

const assert = require('assert');
const _ = require('lodash');

const { wordBreak } = require('./');

describe('#wordBreak', () => {
  const tests = [
    {
      s: 'leetcode',
      wordDict: ['leet', 'code'],
      result: true,
    },
    {
      s: 'applepenapple',
      wordDict: ['apple', 'pen'],
      result: true,
    },
    {
      s: 'catsandog',
      wordDict: ['cats', 'dog', 'sand', 'and', 'cat'],
      result: false,
    },
    {
      s:
        'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab',
      wordDict: ['a', 'aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaaa', 'aaaaaaa', 'aaaaaaaa', 'aaaaaaaaa', 'aaaaaaaaaa'],
      result: false,
    },
    {
      s: 'bb',
      wordDict: ['a', 'b', 'bbb', 'bbbb'],
      result: true,
    },
  ];

  _.forEach(tests, ({ s, wordDict, result }) => {
    it(`${s}, ${wordDict} -> ${result}`, () => {
      assert.deepStrictEqual(wordBreak(s, wordDict), result);
    });
  });
});
