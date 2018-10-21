'use strict';

const assert = require('assert');
const _ = require('lodash');
const { findContentChildren } = require('./');

describe('#findContentChildren', () => {
  const tests = [
    {
      g: [1, 2, 3],
      s: [1, 1],
      result: 1,
    },
    {
      g: [1, 3],
      s: [1, 2, 3],
      result: 2,
    },
  ];

  _.forEach(tests, ({ g, s, result }) => {
    it(`${g}, ${s} -> ${result}`, () => {
      assert.deepStrictEqual(findContentChildren(g, s), result);
    });
  });
});
