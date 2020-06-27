'use strict';

const assert = require('assert');
const _ = require('lodash');

const { getFolderNames } = require('./');

describe('#getFolderNames', () => {
  const tests = [
    {
      names: ['pes', 'fifa', 'gta', 'pes(2019)'],
      result: ['pes', 'fifa', 'gta', 'pes(2019)'],
    },
    {
      names: ['gta', 'gta(1)', 'gta', 'avalon'],
      result: ['gta', 'gta(1)', 'gta(2)', 'avalon'],
    },
    {
      names: ['kaido', 'kaido(1)', 'kaido', 'kaido(1)'],
      result: ['kaido', 'kaido(1)', 'kaido(2)', 'kaido(1)(1)'],
    },
  ];

  _.forEach(tests, ({ names, result }) => {
    it(`${names} -> ${result}`, () => {
      assert.deepStrictEqual(getFolderNames(names), result);
    });
  });
});
