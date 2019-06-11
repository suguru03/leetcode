'use strict';

const assert = require('assert');
const _ = require('lodash');
const { smallestSubsequence } = require('./');

describe('#smallestSubsequence', () => {
  const tests = [
    {
      text: 'cdadabcc',
      result: 'adbc',
    },
    {
      text: 'abcd',
      result: 'abcd',
    },
    {
      text: 'ecbacba',
      result: 'eacb',
    },
    {
      text: 'leetcode',
      result: 'letcod',
    },
  ];

  _.forEach(tests, ({ text, result }) => {
    it(`${text} -> ${result}`, () => {
      assert.deepStrictEqual(smallestSubsequence(text), result);
    });
  });
});
