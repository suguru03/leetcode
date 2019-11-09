'use strict';

const assert = require('assert');
const _ = require('lodash');
const { minWindow } = require('./');

describe('#minWindow', () => {
  const tests = [
    {
      s: 'ADOBECODEBANC',
      t: 'ABC',
      result: 'BANC',
    },
    {
      s: 'a',
      t: 'aa',
      result: '',
    },
  ];

  _.forEach(tests, ({ s, t, result }) => {
    it(`${s}, ${t} -> ${result}`, () => {
      assert.deepStrictEqual(minWindow(s, t), result);
    });
  });
});
