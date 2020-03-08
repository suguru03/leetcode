'use strict';

const assert = require('assert');
const _ = require('lodash');
const { rankTeams } = require('./');

describe('#rankTeams', () => {
  const tests = [
    {
      votes: ['ABC', 'ACB', 'ABC', 'ACB', 'ACB'],
      result: 'ACB',
    },
  ];

  _.forEach(tests, ({ votes, result }) => {
    it(`${votes} -> ${result}`, () => {
      assert.deepStrictEqual(rankTeams(votes), result);
    });
  });
});
