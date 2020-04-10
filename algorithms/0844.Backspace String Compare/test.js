'use strict';

const assert = require('assert');

const _ = require('lodash');

const { backspaceCompare } = require('./');

describe('#backspaceCompare', () => {
  const tests = [
    {
      S: 'ab#c',
      T: 'ad#c',
      result: true,
    },
    {
      S: 'ab##',
      T: 'c#d#',
      result: true,
    },
    {
      S: 'a#c',
      T: 'b',
      result: false,
    },
    {
      S: 'xywrrmp',
      T: 'xywrrmu#p',
      result: true,
    },

    {
      S: 'bxj##tw',
      T: 'bxj###tw',
      result: false,
    },
    {
      S: 'a##c',
      T: '#a#c',
      result: true,
    },
  ];

  _.forEach(tests, ({ S, T, result }) => {
    it(`S: ${S}, T: ${T} => ${result}`, () => {
      assert.deepStrictEqual(backspaceCompare(S, T), result);
    });
  });
});
