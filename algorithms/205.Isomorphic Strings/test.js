'use strict';

const assert = require('assert');
const _ = require('lodash');
const { isIsomorphic } = require('./');

describe('#isIsomorphic', () => {
  const tests = [
    {
      s: 'egg',
      t: 'add',
      result: true,
    },
    {
      s: 'foo',
      t: 'bar',
      result: false,
    },
    {
      s: 'paper',
      t: 'title',
      result: true,
    },
  ];

  _.forEach(tests, ({ s, t, result }) => {
    it(`${s}, ${t} -> ${result}`, () => {
      assert.strictEqual(isIsomorphic(s, t), result);
    });
  });
});
