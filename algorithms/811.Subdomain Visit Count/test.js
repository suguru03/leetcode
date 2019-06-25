'use strict';

const assert = require('assert');
const _ = require('lodash');
const { subdomainVisits } = require('./');

describe('#subdomainVisits', () => {
  const tests = [
    {
      cpdomains: ['9001 discuss.leetcode.com'],
      result: ['9001 discuss.leetcode.com', '9001 leetcode.com', '9001 com'],
    },
    {
      cpdomains: ['900 google.mail.com', '50 yahoo.com', '1 intel.mail.com', '5 wiki.org'],
      result: [
        '901 mail.com',
        '50 yahoo.com',
        '900 google.mail.com',
        '5 wiki.org',
        '5 org',
        '1 intel.mail.com',
        '951 com',
      ],
    },
  ];

  _.forEach(tests, ({ cpdomains, result }) => {
    it(`${cpdomains} -> ${result}`, () => {
      assert.deepStrictEqual(sort(subdomainVisits(cpdomains)), sort(result));
    });
  });

  function sort(arr) {
    return arr.sort((s1, s2) => s1.localeCompare(s2));
  }
});
