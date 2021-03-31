'use strict';

const assert = require('assert');

const { maxEnvelopes } = require('./');

describe('#maxEnvelopes', () => {
  const tests = [
    {
      envelopes: [
        [5, 4],
        [6, 4],
        [6, 7],
        [2, 3],
      ],
      result: 3,
    },
    {
      envelopes: [
        [1, 1],
        [1, 1],
        [1, 1],
      ],
      result: 1,
    },
    {
      envelopes: [
        [1, 2],
        [2, 1],
        [2, 3],
        [3, 2],
        [3, 1],
      ],
      result: 2,
    },
    {
      envelopes: [
        [17, 15],
        [17, 18],
        [2, 8],
        [7, 2],
        [17, 2],
        [17, 8],
        [6, 15],
      ],
      result: 3,
    },
    {
      envelopes: [
        [4, 5],
        [4, 6],
        [6, 7],
        [2, 3],
        [1, 1],
      ],
      result: 4,
    },
    {
      envelopes: [
        [17, 18],
        [20, 4],
        [4, 3],
        [14, 6],
        [16, 4],
        [8, 11],
        [17, 11],
        [18, 7],
        [20, 12],
      ],
      result: 4,
    },
  ];

  for (const { envelopes, result } of tests) {
    it(`${envelopes} -> ${result}`, () => {
      assert.deepStrictEqual(maxEnvelopes(envelopes), result);
    });
  }
});
