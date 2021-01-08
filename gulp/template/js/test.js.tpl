'use strict';

const assert = require('assert');

const { template } = require('./');

describe('#template', () => {

  const tests = [$1];

  for (const { $2 result } of tests) {
    it(`$3 -> ${result}`, () => {
      assert.deepStrictEqual(template($4), result);
    });
  }
});
