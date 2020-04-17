'use strict';

const assert = require('assert');
const _ = require('lodash');

const { checkValidString } = require('./');

describe('#checkValidString', () => {
  const tests = [
    {
      s: '()',
      result: true,
    },
    {
      s: '*)',
      result: true,
    },
    {
      s: '()()',
      result: true,
    },
    {
      s: '(*()',
      result: true,
    },
    {
      s: '(*))',
      result: true,
    },
    {
      s: '(((******))',
      result: true,
    },
    {
      s: '((*)(*)())((()())((()))(*',
      result: false,
    },
    {
      s: '(())(())(((()*()()()))()((()()(*()())))(((*)()',
      result: false,
    },
    {
      s: '(*)',
      result: true,
    },
    {
      s: '((*)(*))((*',
      result: false,
    },
    {
      s: '((((()(()()()*()(((((*)()*(**(())))))(())()())(((())())())))))))(((((())*)))()))(()((*()*(*)))(*)()',
      result: true,
    },
    {
      s: '**)())',
      result: true,
    },
  ];

  _.forEach(tests, ({ s, result }) => {
    it(`${s} -> ${result}`, () => {
      assert.strictEqual(checkValidString(s), result);
    });
  });
});
