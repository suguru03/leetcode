'use strict';

const assert = require('assert');
const _ = require('lodash');
const { getHint } = require('./');

describe('#getHint', () => {
  const tests = [
    {
      secret: '1807',
      guess: '7810',
      result: '1A3B',
    },
    {
      secret: '1123',
      guess: '0111',
      result: '1A1B',
    },
    {
      secret: '93989817073226399421225583064242870001308363274756',
      guess: '17347932826830156772850437376699905057641470419712',
      result: '2A39B',
    },
  ];

  _.forEach(tests, ({ secret, guess, result }) => {
    it(`${secret}, ${guess} -> ${result}`, () => {
      assert.deepStrictEqual(getHint(secret, guess), result);
    });
  });
});
