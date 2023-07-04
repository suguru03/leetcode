'use strict';

const assert = require('assert');
const _ = require('lodash');

const { countCompleteComponents } = require('./');

describe('#countCompleteComponents', () => {
  const tests = [
    {
      n: 6,
      edges: [
        [0, 1],
        [0, 2],
        [1, 2],
        [3, 4],
      ],
      result: 3,
    },
    {
      n: 6,
      edges: [
        [0, 1],
        [0, 2],
        [1, 2],
        [3, 4],
        [3, 5],
      ],
      result: 1,
    },
    {
      n: 4,
      edges: [
        [0, 1],
        [0, 2],
        [1, 3],
        [2, 3],
        [0, 3],
        [1, 2],
      ],
      result: 1,
    },
    {
      n: 2,
      edges: [[1, 0]],
      result: 1,
    },
    {
      n: 3,
      edges: [
        [1, 0],
        [2, 1],
      ],
      result: 0,
    },
  ];

  _.forEach(tests, ({ n, edges, result }) => {
    it(`${n}, ${edges} -> ${result}`, () => {
      assert.deepStrictEqual(countCompleteComponents(n, edges), result);
    });
  });
});
