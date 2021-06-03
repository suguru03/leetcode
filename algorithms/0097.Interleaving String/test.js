'use strict';

const assert = require('assert');

const { isInterleave } = require('./');

describe('#isInterleave', () => {
  const tests = [
    {
      s1: 'aabcc',
      s2: 'dbbca',
      s3: 'aadbbcbcac',
      result: true,
    },
    {
      s1: 'aabcc',
      s2: 'dbbca',
      s3: 'aadbbbaccc',
      result: false,
    },
    {
      s1: '',
      s2: '',
      s3: '',
      result: true,
    },
    {
      s1: '',
      s2: '',
      s3: 'a',
      result: false,
    },
  ];

  for (const { s1, s2, s3, result } of tests) {
    it(`${s1}, ${s2}, ${s3} -> ${result}`, () => {
      assert.deepStrictEqual(isInterleave(s1, s2, s3), result);
    });
  }
});
