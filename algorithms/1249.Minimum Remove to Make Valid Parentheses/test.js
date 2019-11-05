'use strict';

const assert = require('assert');
const _ = require('lodash');
const { minRemoveToMakeValid } = require('./');

describe('#minRemoveToMakeValid', () => {
  const tests = [
    {
      s: 'lee(t(c)o)de)',
      result: 'lee(t(c)o)de',
    },
    {
      s: 'a)b(c)d',
      result: 'ab(c)d',
    },
    {
      s: '))((',
      result: '',
    },
    {
      s: '(a(b(c)d)',
      result: 'a(b(c)d)',
    },
    {
      s: '(t(e)y))d(()(e(',
      result: '(t(e)y)d()e',
    },
  ];

  _.forEach(tests, ({ s, result }) => {
    it(`${s} -> ${result}`, () => {
      assert.deepStrictEqual(minRemoveToMakeValid(s), result);
    });
  });
});
