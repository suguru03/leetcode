'use strict';

const assert = require('assert');
const _ = require('lodash');

const { countSubTrees } = require('./');

describe('#countSubTrees', () => {
  const tests = [
    {
      n: 7,
      edges: [[0, 1], [0, 2], [1, 4], [1, 5], [2, 3], [2, 6]],
      labels: 'abaedcd',
      result: [2, 1, 1, 1, 1, 1, 1],
    },
    {
      n: 4,
      edges: [[0, 2], [0, 3], [1, 2]],
      labels: 'aeed',
      result: [1, 1, 2, 1],
    },
    {
      n: 7,
      edges: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6]],
      labels: 'aaabaaa',
      result: [6, 5, 4, 1, 3, 2, 1],
    },
  ];

  _.forEach(tests, ({ n, edges, labels, result }) => {
    it(`${n}, ${edges}, ${labels} -> ${result}`, () => {
      assert.deepStrictEqual(countSubTrees(n, edges, labels), result);
    });
  });
});
