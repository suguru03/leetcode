'use strict';

const assert = require('assert');
const _ = require('lodash');
const { numberOfLines } = require('./');

describe('#numberOfLines', () => {
  const tests = [
    {
      widths: [
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
      ],
      S: 'abcdefghijklmnopqrstuvwxyz',
      result: [3, 60],
    },
    {
      widths: [
        4,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
      ],
      S: 'bbbcccdddaaa',
      result: [2, 4],
    },
  ];

  _.forEach(tests, ({ widths, S, result }) => {
    it(`[${widths}], ${S} -> [${result}]`, () => {
      assert.deepStrictEqual(numberOfLines(widths, S), result);
    });
  });
});
