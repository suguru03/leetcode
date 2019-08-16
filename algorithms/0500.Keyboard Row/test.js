'use strict';

const assert = require('assert');
const _ = require('lodash');
const { findWords } = require('./');

describe('#findWords', () => {
  const tests = [
    {
      words: ['Hello', 'Alaska', 'Dad', 'Peace'],
      result: ['Alaska', 'Dad'],
    },
    {
      words: [],
      result: [],
    },
    {
      words: ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'],
      result: ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'],
    },
  ];

  _.forEach(tests, ({ words, result }) => {
    it(`[${words}] -> [${result}]`, () => {
      assert.deepEqual(findWords(words), result);
    });
  });
});
