'use strict';

const assert = require('assert');

const _ = require('lodash');

const { minimumLengthEncoding } = require('./');

describe('#minimumLengthEncoding', () => {
  const tests = [
    {
      words: ['time', 'me', 'bell'],
      result: 10,
    },
  ];

  _.forEach(tests, ({ words, result }) => {
    it(`words: ${words} => ${result}`, () => {
      assert.deepStrictEqual(minimumLengthEncoding(words), result);
    });
  });
});
