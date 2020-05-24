'use strict';

const assert = require('assert');
const _ = require('lodash');
const { maxVowels } = require('./');

describe('#maxVowels', () => {
  const tests = [
    {
      s: 'abciiidef',
      k: 3,
      result: 3,
    },
    {
      s: 'aeiou',
      k: 2,
      result: 2,
    },
  ];

  _.forEach(tests, ({ s, k, result }) => {
    it(`${s}, ${k} -> ${result}`, () => {
      assert.deepStrictEqual(maxVowels(s, k), result);
    });
  });
});
