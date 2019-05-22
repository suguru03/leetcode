'use strict';

const assert = require('assert');
const _ = require('lodash');
const { lastStoneWeight } = require('./');

describe('#lastStoneWeight', () => {
  const tests = [
    {
      stones: [2, 7, 4, 1, 8, 1],
      result: 1,
    },
    {
      stones: [8, 10, 4],
      result: 2,
    },
  ];

  _.forEach(tests, ({ stones, result }) => {
    it(`${stones} -> ${result}`, () => {
      assert.deepStrictEqual(lastStoneWeight(stones), result);
    });
  });
});
