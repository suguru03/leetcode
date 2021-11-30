'use strict';

const assert = require('assert');

const { accountsMerge } = require('./');

describe('#accountsMerge', () => {
  const tests = [
    {
      accounts: [
        ['John', 'johnsmith@mail.com', 'john_newyork@mail.com'],
        ['John', 'johnsmith@mail.com', 'john00@mail.com'],
        ['Mary', 'mary@mail.com'],
        ['John', 'johnnybravo@mail.com'],
      ],
      result: [
        ['John', 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com'],
        ['Mary', 'mary@mail.com'],
        ['John', 'johnnybravo@mail.com'],
      ],
    },
    {
      accounts: [
        ['David', 'David0@m.co', 'David1@m.co'],
        ['David', 'David3@m.co', 'David4@m.co'],
        ['David', 'David4@m.co', 'David5@m.co'],
        ['David', 'David2@m.co', 'David3@m.co'],
        ['David', 'David1@m.co', 'David2@m.co'],
      ],
      result: [['David', 'David0@m.co', 'David1@m.co', 'David2@m.co', 'David3@m.co', 'David4@m.co', 'David5@m.co']],
    },
  ];

  for (const { accounts, result } of tests) {
    it(`${accounts} -> ${result}`, () => {
      assert.deepStrictEqual(accountsMerge(accounts), result);
    });
  }
});
