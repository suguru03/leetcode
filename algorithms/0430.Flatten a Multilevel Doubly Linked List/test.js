'use strict';

const assert = require('assert');
const _ = require('lodash');

const { flatten } = require('./');

describe('#hammingDistance', () => {
  const tests = [
    {
      x: 1,
      y: 4,
      result: 2,
    },
    {
      x: 1,
      y: 1,
      result: 0,
    },
    {
      x: 1,
      y: 15,
      result: 3,
    },
  ];

  _.forEach(tests, ({ x, y, result }) => {
    it(`${x}, ${y} -> ${result}`, () => {
      assert.deepStrictEqual(hammingDistance(x, y), result);
    });
  });
});
