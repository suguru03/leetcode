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
      word1: 'zoologicoarchaeologist',
      word2: 'zoogeologist',
      result: 10,
    },
  ];

  _.forEach(tests, ({ word1, word2, result }) => {
    it(`${word1}, ${word2} -> ${result}`, () => {
      assert.deepStrictEqual(minDistance(word1, word2), result);
    });
  });
});
