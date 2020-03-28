'use strict';

const assert = require('assert');
const _ = require('lodash');

const { generateParenthesis } = require('./');

describe('#generateParenthesis', () => {
  const tests = [
    {
      n: 3,
      result: ['((()))', '(()())', '(())()', '()(())', '()()()'],
    },
    {
      n: 4,
      result: [
        '(((())))',
        '((()()))',
        '((())())',
        '((()))()',
        '(()(()))',
        '(()()())',
        '(()())()',
        '(())(())',
        '(())()()',
        '()((()))',
        '()(()())',
        '()(())()',
        '()()(())',
        '()()()()',
      ],
    },
  ];

  _.forEach(tests, ({ n, result }) => {
    it(`${n} -> ${result}`, () => {
      assert.deepStrictEqual(sort(generateParenthesis(n)), sort(result));
    });
  });

  function sort(arr) {
    return arr.sort((s1, s2) => s1.localeCompare(s2));
  }
});
