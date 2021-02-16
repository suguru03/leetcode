'use strict';

const assert = require('assert');
const _ = require('lodash');

const { letterCasePermutation } = require('./');

describe('#letterCasePermutation', () => {
  const tests = [
    {
      S: 'a1b2',
      result: ['a1b2', 'a1B2', 'A1b2', 'A1B2'],
    },
    {
      S: '3z4',
      result: ['3z4', '3Z4'],
    },
    {
      S: '12345',
      result: ['12345'],
    },
    {
      S: 'C',
      result: ['c', 'C'],
    },
  ];

  _.forEach(tests, ({ S, result }) => {
    it(`${S} -> ${result}`, () => {
      assert.deepStrictEqual(letterCasePermutation(S).sort(), result.sort());
    });
  });
});
