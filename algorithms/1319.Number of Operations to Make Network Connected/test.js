'use strict';

const assert = require('assert');
const _ = require('lodash');
const { makeConnected } = require('./');

describe('#makeConnected', () => {
  const tests = [
    {
      n: 4,
      connections: [[0, 1], [0, 2], [1, 2]],
      result: 1,
    },
    {
      n: 6,
      connections: [[0, 1], [0, 2], [0, 3], [1, 2], [1, 3]],
      result: 2,
    },
    {
      n: 6,
      connections: [[0, 1], [0, 2], [0, 3], [1, 2]],
      result: -1,
    },
    {
      n: 5,
      connections: [[0, 1], [0, 2], [3, 4], [2, 3]],
      result: 0,
    },
  ];

  _.forEach(tests, ({ n, connections, result }) => {
    it(`${n}, ${connections} -> ${result}`, () => {
      assert.deepStrictEqual(makeConnected(n, connections), result);
    });
  });
});
