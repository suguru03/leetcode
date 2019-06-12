'use strict';

const assert = require('assert');
const _ = require('lodash');
const { removeOuterParentheses } = require('./');

describe('#removeOuterParentheses', () => {
  const tests = [
    {
      S: '(()())(())',
      result: '()()()',
    },
    {
      S: '(()())(())(()(()))',
      result: '()()()()(())',
    },
    {
      S: '()()',
      result: '',
    },
  ];

  _.forEach(tests, ({ S, result }) => {
    it(`${S} -> ${result}`, () => {
      assert.deepStrictEqual(removeOuterParentheses(S), result);
    });
  });
});
