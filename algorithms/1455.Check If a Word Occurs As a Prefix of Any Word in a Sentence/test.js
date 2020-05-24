'use strict';

const assert = require('assert');
const _ = require('lodash');

const { isPrefixOfWord } = require('./');

describe('#isPrefixOfWord', () => {
  const tests = [
    {
      sentence: 'i love eating burger',
      searchWord: 'burg',
      result: 4,
    },
    {
      sentence: 'hellohello hellohellohello',
      searchWord: 'ell',
      result: -1,
    },
  ];

  _.forEach(tests, ({ sentence, searchWord, result }) => {
    it(`${sentence}, ${searchWord} -> ${result}`, () => {
      assert.deepStrictEqual(isPrefixOfWord(sentence, searchWord), result);
    });
  });
});
