'use strict';

const assert = require('assert');
const _ = require('lodash');
const { boldWords } = require('./');

describe('#boldWords', () => {
  const tests = [
    {
      words: ['ab', 'bc'],
      S: 'aabcd',
      result: 'a<b>abc</b>d',
    },
    {
      words: ['e', 'cab', 'de', 'cc', 'db'],
      S: 'cbccceeead',
      result: 'cb<b>ccceee</b>ad',
    },
    {
      words: ['ccb', 'b', 'd', 'cba', 'dc'],
      S: 'eeaadadadc',
      result: 'eeaa<b>d</b>a<b>d</b>a<b>dc</b>',
    },
  ];

  _.forEach(tests, ({ words, S, result }) => {
    it(`${words}, ${S} -> ${result}`, () => {
      assert.strictEqual(boldWords(words, S), result);
    });
  });
});
