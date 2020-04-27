'use strict';

const assert = require('assert');
const _ = require('lodash');

const { longestCommonSubsequence } = require('./');

describe('#longestCommonSubsequence', () => {
  const tests = [
    {
      text1: 'abcde',
      text2: 'ace',
      result: 3,
    },
    {
      text1: 'abc',
      text2: 'abc',
      result: 3,
    },
    {
      text1: 'abc',
      text2: 'def',
      result: 0,
    },
    {
      text1: 'abcdej',
      text2: 'acdbej',
      result: 5,
    },
    {
      text1: 'pqrs',
      text2: 'sqr',
      result: 2,
    },
    {
      text1: 'oxcpqrsvwf',
      text2: 'shmtulqrypy',
      result: 2,
    },
    {
      text1: 'acce',
      text2: 'aeccee',
      result: 4,
    },
    {
      text1: 'fcvqfcnglshwpgxujwrylqzejmdubkxs',
      text2: 'bctsfwdelkdqzshupmrufyxklsjurevip',
      result: 11,
    },
  ];

  _.forEach(tests, ({ text1, text2, result }) => {
    it(`${text1}, ${text2} -> ${result}`, () => {
      assert.deepStrictEqual(longestCommonSubsequence(text1, text2), result);
    });
  });
});
