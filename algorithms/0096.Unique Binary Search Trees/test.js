'use strict';

const assert = require('assert');
const _ = require('lodash');

const { numTrees } = require('./');

describe('#numTrees', () => {
  const tests = [
    {
      n: 3,
      result: 5,
    },
  ];

  _.forEach(tests, ({ n, result }) => {
    it(`${n} -> ${result}`, () => {
      assert.deepStrictEqual(numTrees(n), result);
    });
  });
});
