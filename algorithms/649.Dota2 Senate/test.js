'use strict';

const assert = require('assert');
const _ = require('lodash');
const { predictPartyVictory } = require('./');

describe('#predictPartyVictory', () => {

  const tests = [{
    senate: 'RD',
    result: 'Radiant'
  }, {
    senate: 'DR',
    result: 'Dire'
  }, {
    senate: 'RDDDRDRR',
    result: 'Dire'
  }, {
    senate: 'RDDRD',
    result: 'Dire'
  }, {
    senate: 'RDRDR',
    result: 'Radiant'
  }, {
    senate: 'RDDDDRRRR',
    result: 'Radiant'
  }, {
    senate: 'RDDDDDRRRRR',
    result: 'Dire'
  }, {
    senate: 'DDDDRRDDDRDRDRRDDRDDDRDRRRRDRRRRR',
    result: 'Dire'
  }, {
    senate: 'DDDDRRDDDRDRDRRDDRDDDRDRRRRDRRRRRDRDDRDDRRDDRRRDDRRRDDDDRRRRRRRDDRRRDDRDDDRRRDRDDRDDDRRDRRDRRRDRDRDR',
    result: 'Dire'
  }];

  _.forEach(tests, ({ senate, result }) => {
    it(`${senate} -> ${result}`, () => {
      assert.strictEqual(predictPartyVictory(senate), result);
    });
  });
});
