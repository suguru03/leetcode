'use strict';

const assert = require('assert');
const _ = require('lodash');

const { findWords } = require('./');

describe('#findWords', () => {
  const tests = [
    {
      board: [['o', 'a', 'a', 'n'], ['e', 't', 'a', 'e'], ['i', 'h', 'k', 'r'], ['i', 'f', 'l', 'v']],
      words: ['oath', 'pea', 'eat', 'rain'],
      result: ['oath', 'eat'],
    },
    {
      board: [['a', 'a']],
      words: ['aa'],
      result: ['aa'],
    },
    {
      board: [['a', 'b'], ['a', 'a']],
      words: ['aba', 'baa', 'bab', 'aaab', 'aaa', 'aaaa', 'aaba'],
      result: ['aba', 'aaa', 'aaab', 'aaba', 'baa'],
    },
  ];

  _.forEach(tests, ({ board, words, result }) => {
    it(`${board}, ${words} -> ${result}`, () => {
      assert.deepStrictEqual(findWords(board, words), result);
    });
  });
});
