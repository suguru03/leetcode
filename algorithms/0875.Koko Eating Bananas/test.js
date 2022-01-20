'use strict';

const assert = require('assert');

const { minEatingSpeed } = require('./');

describe('#minEatingSpeed', () => {
  const tests = [
    {
      piles: [3, 6, 7, 11],
      h: 8,
      result: 4,
    },
    {
      piles: [30, 11, 23, 4, 20],
      h: 5,
      result: 30,
    },
    {
      piles: [30, 11, 23, 4, 20],
      h: 6,
      result: 23,
    },

    {
      piles: [
        332484035,
        524908576,
        855865114,
        632922376,
        222257295,
        690155293,
        112677673,
        679580077,
        337406589,
        290818316,
        877337160,
        901728858,
        679284947,
        688210097,
        692137887,
        718203285,
        629455728,
        941802184,
      ],
      h: 823855818,
      result: 14,
    },
  ];

  for (const { piles, h, result } of tests) {
    it(`${piles}, ${h} -> ${result}`, () => {
      assert.deepStrictEqual(minEatingSpeed(piles, h), result);
    });
  }
});
