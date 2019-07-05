'use strict';

const assert = require('assert');
const _ = require('lodash');
const { longestWord } = require('./');

describe('#longestWord', () => {
  const tests = [
    {
      words: ['w', 'wo', 'wor', 'worl', 'world'],
      result: 'world',
    },
    {
      words: ['a', 'banana', 'app', 'appl', 'ap', 'apply', 'apple'],
      result: 'apple',
    },
  ];

  _.forEach(tests, ({ words, result }) => {
    it(`${words} -> ${result}`, () => {
      assert.deepStrictEqual(longestWord(words), result);
    });
  });
});
