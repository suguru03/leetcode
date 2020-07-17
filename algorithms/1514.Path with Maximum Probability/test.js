'use strict';

const assert = require('assert');
const _ = require('lodash');

const { maxProbability } = require('./');

describe('#maxProbability', () => {
  const tests = [
    {
      n: 3,
      edges: [[0, 1], [1, 2], [0, 2]],
      succProb: [0.5, 0.5, 0.2],
      start: 0,
      end: 2,
      result: 0.25,
    },
    {
      n: 3,
      edges: [[0, 1], [1, 2], [0, 2]],
      succProb: [0.5, 0.5, 0.3],
      start: 0,
      end: 2,
      result: 0.3,
    },
    {
      n: 3,
      edges: [[0, 1]],
      succProb: [0.5],
      start: 0,
      end: 2,
      result: 0,
    },
  ];

  _.forEach(tests, ({ n, edges, succProb, start, end, result }) => {
    it(`${n}, ${edges}, ${succProb}, ${start}, ${end} -> ${result}`, () => {
      assert.deepStrictEqual(maxProbability(n, edges, succProb, start, end), result);
    });
  });
});
