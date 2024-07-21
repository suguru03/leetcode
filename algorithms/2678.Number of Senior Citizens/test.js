'use strict';

const assert = require('assert');

const { countSeniors } = require('./');

describe('#countSeniors', () => {
  const tests = [
    {
      details: ['7868190130M7522', '5303914400F9211', '9273338290F4010'],
      result: 2,
    },
    {
      details: ['1313579440F2036', '2921522980M5644'],
      result: 0,
    },
  ];

  for (const { details, result } of tests) {
    it(`${details} -> ${result}`, () => {
      assert.deepStrictEqual(countSeniors(details), result);
    });
  }
});
