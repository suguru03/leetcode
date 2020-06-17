'use strict';

const assert = require('assert');
const _ = require('lodash');

const { validIPAddress } = require('./');

describe('#validIPAddress', () => {
  const tests = [
    {
      IP: '162.16.254.1',
      result: 'IPv4',
    },
    {
      IP: '2001:0db8:85a3:0:0:8A2E:0370:7334',
      result: 'IPv6',
    },
    {
      IP: '256.256.256.256',
      result: 'Neither',
    },
    {
      IP: '1e1.4.5.6',
      result: 'Neither',
    },
    {
      IP: '01.01.01.01',
      result: 'Neither',
    },
    {
      IP: '2001:0db8:85a3:00000:0:8A2E:0370:7334',
      result: 'Neither',
    },
    {
      IP: '20EE:FGb8:85a3:0:0:8A2E:0370:7334',
      result: 'Neither',
    },
  ];

  _.forEach(tests, ({ IP, result }) => {
    it(`${IP} -> ${result}`, () => {
      assert.deepStrictEqual(validIPAddress(IP), result);
    });
  });
});
