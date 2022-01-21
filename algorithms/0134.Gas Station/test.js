'use strict';

const assert = require('assert');

const { canCompleteCircuit } = require('./');

describe('#canCompleteCircuit', () => {
  const tests = [
    {
      gas: [1, 2, 3, 4, 5],
      cost: [3, 4, 5, 1, 2],
      result: 3,
    },
    {
      gas: [2, 3, 4],
      cost: [3, 4, 3],
      result: -1,
    },
  ];

  for (const { gas, cost, result } of tests) {
    it(`${gas}, ${cost} -> ${result}`, () => {
      assert.deepStrictEqual(canCompleteCircuit(gas, cost), result);
    });
  }
});
