'use strict';

const assert = require('assert');
const _ = require('lodash');
const { gcdOfStrings } = require('./');

describe('#gcdOfStrings', () => {
  const tests = [
    {
      str1: 'ABCABC',
      str2: 'ABC',
      result: 'ABC',
    },
    {
      str1: 'ABABAB',
      str2: 'ABAB',
      result: 'AB',
    },
    {
      str1: 'LEET',
      str2: 'CODE',
      result: '',
    },
    {
      str1: 'TAUXXTAUXXTAUXXTAUXXTAUXX',
      str2: 'TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX',
      result: 'TAUXX',
    },
  ];

  _.forEach(tests, ({ str1, str2, result }) => {
    it(`${str1}, ${str2} -> ${result}`, () => {
      assert.deepStrictEqual(gcdOfStrings(str1, str2), result);
    });
  });
});
