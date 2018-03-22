'use strict';

const assert = require('assert');
const _ = require('lodash');
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

  _.forEach(tests, ({ letters, target, result }) => {
    it(`${letters}, ${target} -> ${result}`, () => {
      assert.deepStrictEqual(nextGreatestLetter(letters, target), result);
    });
  });
});
