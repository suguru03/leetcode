'use strict';

const assert = require('assert');
const _ = require('lodash');
const { reverseWords } = require('./');

describe('#reverseWords', () => {
  const tests = [
    {
      s: "Let's take LeetCode contest",
      result: "s'teL ekat edoCteeL tsetnoc",
    },
  ];

  _.forEach(tests, ({ s, result }) => {
    it(`${s} -> ${result}`, () => {
      assert.deepStrictEqual(reverseWords(s), result);
    });
  });
});
