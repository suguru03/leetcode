'use strict';

const assert = require('assert');

const { isValidSerialization } = require('./');

describe('#isValidSerialization', () => {
  const tests = [
    {
      preorder: '9,3,4,#,#,1,#,#,2,#,6,#,#',
      result: true,
    },
    {
      preorder: '1,#',
      result: false,
    },
    {
      preorder: '9,#,#,1',
      result: false,
    },
  ];

  for (const { preorder, result } of tests) {
    it(`${preorder} -> ${result}`, () => {
      assert.deepStrictEqual(isValidSerialization(preorder), result);
    });
  }
});
