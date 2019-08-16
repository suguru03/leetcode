'use strict';

const assert = require('assert');
const _ = require('lodash');
const { uniqueMorseRepresentations } = require('./');

describe('#uniqueMorseRepresentations', () => {
  const tests = [
    {
      words: ['gin', 'zen', 'gig', 'msg'],
      result: 2,
    },
  ];

  _.forEach(tests, ({ words, result }) => {
    it(`[${words}] -> [${result}]`, () => {
      assert.deepStrictEqual(uniqueMorseRepresentations(words), result);
    });
  });
});
