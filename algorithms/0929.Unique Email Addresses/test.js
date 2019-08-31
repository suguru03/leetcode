'use strict';

const assert = require('assert');
const _ = require('lodash');
const { numUniqueEmails } = require('./');

describe('#numUniqueEmails', () => {
  const tests = [
    {
      emails: ['test.email+alex@leetcode.com', 'test.e.mail+bob.cathy@leetcode.com', 'testemail+david@lee.tcode.com'],
      result: 2,
    },
  ];

  _.forEach(tests, ({ emails, result }) => {
    it(`${emails} -> ${result}`, () => {
      assert.deepStrictEqual(numUniqueEmails(emails), result);
    });
  });
});
