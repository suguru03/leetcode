'use strict';

const assert = require('assert');

const _ = require('lodash');

const { isNStraightHand } = require('./');

describe('#isNStraightHand', () => {
  const tests = [
    {
      hand: [1, 2, 3, 6, 2, 3, 4, 7, 8],
      W: 3,
      result: true,
    },
    {
      hand: [1, 2, 3, 4, 5],
      W: 4,
      result: false,
    },
    {
      hand: [1, 2, 3, 4, 5, 6],
      W: 2,
      result: true,
    },
  ];

  _.forEach(tests, ({ hand, W, result }) => {
    it(`hand: ${hand} W: ${W} => ${result}`, () => {
      assert.deepStrictEqual(isNStraightHand(hand, W), result);
    });
  });
});
