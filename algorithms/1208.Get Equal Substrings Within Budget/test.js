'use strict';

const assert = require('assert');
const _ = require('lodash');
const { equalSubstring } = require('./');

describe('#equalSubstring', () => {
  const tests = [
    {
      s: 'abcd',
      t: 'bcdf',
      maxCost: 3,
      result: 3,
    },
    {
      s: 'abcd',
      t: 'cdef',
      maxCost: 3,
      result: 1,
    },
    {
      s: 'pxezla',
      t: 'loewbi',
      maxCost: 25,
      result: 4,
    },
  ];

  _.forEach(tests, ({ s, t, maxCost, result }) => {
    it(`${s}, ${t}, ${maxCost} -> ${result}`, () => {
      assert.deepStrictEqual(equalSubstring(s, t, maxCost), result);
    });
  });
});
