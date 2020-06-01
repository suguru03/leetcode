'use strict';

const assert = require('assert');
const _ = require('lodash');

const { minDistance } = require('./');

describe('#minDistance', () => {
  const tests = [
    {
      word1: 'horse',
      word2: 'ros',
      result: 3,
    },
    {
      word1: 'intention',
      word2: 'execution',
      result: 5,
    },
    {
      word1: 'zoolo',
      word2: 'zoo',
      result: 2,
    },
    {
      word1: 'zoologicoarchaeologist',
      word2: 'zoogeologist',
      result: 10,
    },
    {
      word1: '',
      word2: '',
      result: 0,
    },
    {
      word1: '',
      word2: 'abc',
      result: 3,
    },
    {
      word1: 'abc',
      word2: '',
      result: 3,
    },
    {
      word1: 'ab',
      word2: 'a',
      result: 1,
    },
    {
      word1: 'park',
      word2: 'spake',
      result: 3,
    },
    {
      word1: 'pneumonoultramicroscopicsilicovolcanoconiosis',
      word2: 'ultramicroscopically',
      result: 27,
    },
  ];

  _.forEach(tests, ({ word1, word2, result }) => {
    it(`${word1}, ${word2} -> ${result}`, () => {
      assert.deepStrictEqual(minDistance(word1, word2), result);
    });
  });
});
