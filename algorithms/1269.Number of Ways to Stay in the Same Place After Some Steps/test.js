'use strict';

const assert = require('assert');
const _ = require('lodash');
const { numWays } = require('./');

describe('#numWays', () => {
  const tests = [
    {
      steps: 3,
      arrLen: 2,
      result: 4,
    },
    {
      steps: 2,
      arrLen: 4,
      result: 2,
    },
    {
      steps: 4,
      arrLen: 2,
      result: 8,
    },
    {
      steps: 27,
      arrLen: 7,
      result: 127784505,
    },
    {
      steps: 438,
      arrLen: 315977,
      result: 483475137,
    },
  ];

  _.forEach(tests, ({ steps, arrLen, result }) => {
    it(`${steps}, ${arrLen} -> ${result}`, () => {
      assert.deepStrictEqual(numWays(steps, arrLen), result);
    });
  });
});
