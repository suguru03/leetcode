'use strict';

const assert = require('assert');
const _ = require('lodash');
const { numDistinct } = require('./');

describe('#numDistinct', () => {
  const tests = [
    {
      s: 'rabbbit',
      t: 'rabbit',
      result: 3,
    },
    {
      s: 'babgbag',
      t: 'bag',
      result: 5,
    },
    {
      s: '',
      t: 'a',
      result: 0,
    },
  ];

  _.forEach(tests, ({ s, t, result }) => {
    it(`${s}, ${t} -> ${result}`, () => {
      assert.deepStrictEqual(numDistinct(s, t), result);
    });
  });
});
