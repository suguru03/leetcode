'use strict';

const assert = require('assert');

const { maximumWealth } = require('./');

describe('#maximumWealth', () => {
  const tests = [
    {
      accounts: [
        [1, 2, 3],
        [3, 2, 1],
      ],
      result: 6,
    },
    {
      accounts: [
        [1, 5],
        [7, 3],
        [3, 5],
      ],
      result: 10,
    },
    {
      accounts: [
        [2, 8, 7],
        [7, 1, 3],
        [1, 9, 5],
      ],
      result: 17,
    },
  ];

  for (const { accounts, result } of tests) {
    it(`${accounts} -> ${result}`, () => {
      assert.deepStrictEqual(maximumWealth(accounts), result);
    });
  }
});
