'use strict';

const assert = require('assert');
const _ = require('lodash');

const { twoCitySchedCost } = require('./');

describe('#twoCitySchedCost', () => {
  const tests = [
    {
      costs: [[10, 20], [30, 200], [400, 50], [30, 20]],
      result: 110,
    },
    {
      costs: [[259, 770], [448, 54], [926, 667], [184, 139], [840, 118], [577, 469]],
      result: 1859,
    },
  ];

  _.forEach(tests, ({ costs, result }) => {
    it(`${costs} -> ${result}`, () => {
      assert.deepStrictEqual(twoCitySchedCost(costs), result);
    });
  });
});
