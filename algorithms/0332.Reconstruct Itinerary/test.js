'use strict';

const assert = require('assert');
const _ = require('lodash');

const { findItinerary } = require('./');

describe('#findItinerary', () => {
  const tests = [
    {
      tickets: [['MUC', 'LHR'], ['JFK', 'MUC'], ['SFO', 'SJC'], ['LHR', 'SFO']],
      result: ['JFK', 'MUC', 'LHR', 'SFO', 'SJC'],
    },
    {
      tickets: [['JFK', 'SFO'], ['JFK', 'ATL'], ['SFO', 'ATL'], ['ATL', 'JFK'], ['ATL', 'SFO']],
      result: ['JFK', 'ATL', 'JFK', 'SFO', 'ATL', 'SFO'],
    },
    {
      tickets: [['JFK', 'KUL'], ['JFK', 'NRT'], ['NRT', 'JFK']],
      result: ['JFK', 'NRT', 'JFK', 'KUL'],
    },
  ];

  _.forEach(tests, ({ tickets, result }) => {
    it(`${tickets} -> ${result}`, () => {
      assert.deepStrictEqual(findItinerary(tickets), result);
    });
  });
});
