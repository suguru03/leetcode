'use strict';

const assert = require('assert');
const _ = require('lodash');

const { wordBreak } = require('./');

describe('#wordBreak', () => {
  const tests = [
    {
      s: 'catsanddog',
      wordDict: ['cat', 'cats', 'and', 'sand', 'dog'],
      result: ['cats and dog', 'cat sand dog'],
    },
    {
      s: 'pineapplepenapple',
      wordDict: ['apple', 'pen', 'applepen', 'pine', 'pineapple'],
      result: ['pine apple pen apple', 'pineapple pen apple', 'pine applepen apple'],
    },
    {
      s: 'catsandog',
      wordDict: ['cats', 'dog', 'sand', 'and', 'cat'],
      result: [],
    },
    {
      s:
        'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab',
      wordDict: ['a', 'aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaaa', 'aaaaaaa', 'aaaaaaaa', 'aaaaaaaaa', 'aaaaaaaaaa'],
      result: [],
    },
    { s: 'cbca', wordDict: ['bc', 'ca'], result: [] },
  ];

  _.forEach(tests, ({ s, wordDict, result }) => {
    it(`${s}, ${wordDict} -> ${result}`, () => {
      assert.deepStrictEqual(wordBreak(s, wordDict).sort(), result.sort());
    });
  });
});
