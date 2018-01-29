'use strict';

const assert = require('assert');
const _ = require('lodash');
const { numJewelsInStones } = require('./');

describe('#numJewelsInStones', () => {
  const tests = [
    {
      J: 'aA',
      S: 'aAAbbbb',
      result: 3,
    },
  ];

  _.forEach(tests, ({ J, S, result }) => {
    it(`${J}, ${S} -> ${result}`, () => {
      assert.deepStrictEqual(numJewelsInStones(J, S), result);
    });
  });
});
