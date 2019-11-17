'use strict';

const assert = require('assert');
const _ = require('lodash');
const { maxScoreWords } = require('./');

describe('#maxScoreWords', () => {
  const tests = [
    {
      words: ['dog', 'cat', 'dad', 'good'],
      letters: ['a', 'a', 'c', 'd', 'd', 'd', 'g', 'o', 'o'],
      score: [1, 0, 9, 5, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      result: 23,
    },
    {
      words: ['xxxz', 'ax', 'bx', 'cx'],
      letters: ['z', 'a', 'b', 'c', 'x', 'x', 'x'],
      score: [4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 10],
      result: 27,
    },
  ];

  _.forEach(tests, ({ words, letters, score, result }) => {
    it(`${words}, ${letters}, ${score} -> ${result}`, () => {
      assert.deepStrictEqual(maxScoreWords(words, letters, score), result);
    });
  });
});
