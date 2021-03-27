'use strict';

const assert = require('assert');

const { wordSubsets } = require('./');

describe('#wordSubsets', () => {
  const tests = [
    {
      A: ['amazon', 'apple', 'facebook', 'google', 'leetcode'],
      B: ['e', 'o'],
      result: ['facebook', 'google', 'leetcode'],
    },
    {
      A: ['amazon', 'apple', 'facebook', 'google', 'leetcode'],
      B: ['l', 'e'],
      result: ['apple', 'google', 'leetcode'],
    },
    {
      A: ['amazon', 'apple', 'facebook', 'google', 'leetcode'],
      B: ['ec', 'oc', 'ceo'],
      result: ['facebook', 'leetcode'],
    },
  ];

  for (const { A, B, result } of tests) {
    it(`${A}, ${B} -> ${result}`, () => {
      assert.deepStrictEqual(wordSubsets(A, B), result);
    });
  }
});
