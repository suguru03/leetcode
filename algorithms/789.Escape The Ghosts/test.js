'use strict';

const assert = require('assert');
const _ = require('lodash');
const { escapeGhosts } = require('./');

describe('#escapeGhosts', () => {
  const tests = [
    {
      ghosts: [[1, 0], [0, 3]],
      target: [0, 1],
      result: true,
    },
    {
      ghosts: [[1, 0]],
      target: [2, 0],
      result: false,
    },
    {
      ghosts: [[2, 0]],
      target: [1, 0],
      result: false,
    },
  ];

  _.forEach(tests, ({ ghosts, target, result }) => {
    it(`${ghosts}, ${target} -> ${result}`, () => {
      assert.deepStrictEqual(escapeGhosts(ghosts, target), result);
    });
  });
});
