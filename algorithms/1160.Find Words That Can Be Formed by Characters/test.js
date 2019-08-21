'use strict';

const assert = require('assert');
const _ = require('lodash');
const { countCharacters } = require('./');

describe('#countCharacters', () => {
  const tests = [
    {
      words: ['cat', 'bt', 'hat', 'tree'],
      chars: 'atach',
      result: 6,
    },
    {
      words: ['hello', 'world', 'leetcode'],
      chars: 'welldonehoneyr',
      result: 10,
    },
  ];

  _.forEach(tests, ({ words, chars, result }) => {
    it(`${words}, ${chars} -> ${result}`, () => {
      assert.deepStrictEqual(countCharacters(words, chars), result);
    });
  });
});
