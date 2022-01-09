'use strict';

const assert = require('assert');

const { nextGreatestLetter } = require('./');

describe('#nextGreatestLetter', () => {
  const tests = [
    {
      letters: ['c', 'f', 'j'],
      target: 'k',
      result: 'c',
    },
    {
      letters: ['c', 'f', 'j'],
      target: 'd',
      result: 'f',
    },
  ];

  for (const { letters, target, result } of tests) {
    it(`${letters}, ${target} -> ${result}`, () => {
      assert.deepStrictEqual(nextGreatestLetter(letters, target), result);
    });
  }
});
