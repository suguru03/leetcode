'use strict';

const assert = require('assert');
const _ = require('lodash');
const { defangIPaddr } = require('./');

describe('#defangIPaddr', () => {
  const tests = [
    {
      address: '1.1.1.1',
      result: '1[.]1[.]1[.]1',
    },
  ];

  _.forEach(tests, ({ address, result }) => {
    it(`${address} -> ${result}`, () => {
      assert.deepStrictEqual(defangIPaddr(address), result);
    });
  });
});
