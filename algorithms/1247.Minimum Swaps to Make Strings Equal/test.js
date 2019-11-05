'use strict';

const assert = require('assert');
const _ = require('lodash');
const { minimumSwap } = require('./');

describe('#minimumSwap', () => {
  const tests = [
    {
      s1: 'xx',
      s2: 'yy',
      result: 1,
    },
    {
      s1: 'xx',
      s2: 'xy',
      result: -1,
    },
    {
      s1: 'xy',
      s2: 'yx',
      result: 2,
    },
    {
      s1: 'xxyyxyxyxx',
      s2: 'xyyxyxxxyx',
      result: 4,
    },
  ];

  _.forEach(tests, ({ s1, s2, result }) => {
    it(`${s1}, ${s2} -> ${result}`, () => {
      assert.deepStrictEqual(minimumSwap(s1, s2), result);
    });
  });
});
