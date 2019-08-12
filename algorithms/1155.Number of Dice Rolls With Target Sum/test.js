'use strict';

const assert = require('assert');
const _ = require('lodash');
const { numRollsToTarget } = require('./');

describe('#numRollsToTarget', () => {
  const tests = [
    {
      d: 1,
      f: 6,
      target: 3,
      result: 1,
    },
    {
      d: 2,
      f: 6,
      target: 7,
      result: 6,
    },
    {
      d: 2,
      f: 5,
      target: 10,
      result: 1,
    },
    {
      d: 1,
      f: 2,
      target: 3,
      result: 0,
    },
    {
      d: 30,
      f: 30,
      target: 500,
      result: 222616187,
    },
  ];

  _.forEach(tests, ({ d, f, target, result }) => {
    it(`${d}, ${f}, ${target} -> ${result}`, () => {
      assert.deepStrictEqual(numRollsToTarget(d, f, target), result);
    });
  });
});
