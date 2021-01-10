'use strict';

const assert = require('assert');
const _ = require('lodash');

const { ladderLength } = require('./');

describe('#ladderLength', () => {
  const tests = [
    {
      beginWord: 'hit',
      endWord: 'cog',
      wordList: ['hot', 'dot', 'dog', 'lot', 'log', 'cog'],
      result: 5,
    },
    {
      beginWord: 'hit',
      endWord: 'cog',
      wordList: ['hot', 'dot', 'dog', 'lot', 'log'],
      result: 0,
    },
    {
      beginWord: 'hot',
      endWord: 'dog',
      wordList: ['hot', 'dot', 'dog'],
      result: 3,
    },
    {
      beginWord: 'hog',
      endWord: 'cog',
      wordList: ['cog'],
      result: 2,
    },
  ];

  for (const { beginWord, endWord, wordList, result } of tests) {
    it(`${beginWord}, ${endWord}, ${wordList} -> ${result}`, () => {
      assert.deepStrictEqual(ladderLength(beginWord, endWord, wordList), result);
    });
  }
});
