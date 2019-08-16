'use strict';

const assert = require('assert');
const _ = require('lodash');
const { mostCommonWord } = require('./');

describe('#mostCommonWord', () => {
  const tests = [
    {
      paragraph: 'Bob hit a ball, the hit BALL flew far after it was hit.',
      banned: ['hit'],
      result: 'ball',
    },
  ];

  _.forEach(tests, ({ paragraph, banned, result }) => {
    it(`paragraph: ${paragraph}, banned: ${banned} => ${result}`, () => {
      assert.deepStrictEqual(mostCommonWord(paragraph, banned), result);
    });
  });
});
