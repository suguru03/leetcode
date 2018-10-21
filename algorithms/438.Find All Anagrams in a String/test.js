'use strict';

const assert = require('assert');
const _ = require('lodash');
const { findAnagrams } = require('./');

describe('#findAnagrams', () => {
  const tests = [
    {
      s: 'cbaebabacd',
      p: 'abc',
      result: [0, 6],
    },
    {
      s: 'abab',
      p: 'ab',
      result: [0, 1, 2],
    },
    {
      s: 'abcba',
      p: 'abc',
      result: [0, 2],
    },
    {
      s: 'abcdabcd',
      p: 'bcd',
      result: [1, 5],
    },
    {
      s: 'eklpyqrbgjdwtcaxzsnifvhmoueklpyqrbgjdwtcaxzsnifvhmoueklp',
      p: 'yqrbgjdwtcaxzsnifvhmou',
      result: [4, 30],
    },
  ];

  _.forEach(tests, ({ s, p, result }) => {
    it(`${s}, ${p} -> ${result}`, () => {
      assert.deepStrictEqual(findAnagrams(s, p), result);
    });
  });
});
