'use strict';

const assert = require('assert');
const _ = require('lodash');

const { partitionLabels } = require('./');

describe('#partitionLabels', () => {
  const tests = [
    {
      S: 'ababcbacadefegdehijhklij',
      result: [9, 7, 8],
    },
  ];

  _.forEach(tests, ({ S, result }) => {
    it(`${S} -> ${result}`, () => {
      assert.deepStrictEqual(partitionLabels(S), result);
    });
  });
});
