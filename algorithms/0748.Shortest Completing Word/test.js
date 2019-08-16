'use strict';

const assert = require('assert');
const _ = require('lodash');
const { shortestCompletingWord } = require('./');

describe('#shortestCompletingWord', () => {
  const tests = [
    {
      licensePlate: '1s3 PSt',
      words: ['step', 'steps', 'stripe', 'stepple'],
      result: 'steps',
    },
    {
      licensePlate: '1s3 456',
      words: ['looks', 'pest', 'stew', 'show'],
      result: 'pest',
    },
  ];

  _.forEach(tests, ({ licensePlate, words, result }) => {
    it(`${licensePlate}, ${words} -> ${result}`, () => {
      assert.strictEqual(shortestCompletingWord(licensePlate, words), result);
    });
  });
});
