'use strict';

const assert = require('assert');
const _ = require('lodash');
// const { isValid } = require('./');

describe('#isValid', () => {
  const tests = [
    {
      s: '()',
      result: true,
    },
    {
      s: '()[]{}',
      result: true,
    },
    {
      s: '(]',
      result: false,
    },
    {
      s: '([])]',
      result: false,
    },
    {
      s: '({[}])',
      result: false,
    },
    {
      s: '(([[{}]{}{}]))',
      result: true,
    },
  ];

  _.forEach(tests, ({ s, result }) => {
    it(`${s} -> ${result}`, () => {
      assert.strictEqual(isValid(s), result);
    });
  });
});

const map = {
  '(': ')',
  '[': ']',
  '{': '}',
};

function isValid(s) {
  const stack = [];
  let l = s.length;
  while (l--) {
    const c = s[l];
    if (!map[c]) {
      stack.push(c);
      continue;
    }
    if (map[c] !== stack.pop()) {
      return false;
    }
  }
  return stack.length === 0;
}
