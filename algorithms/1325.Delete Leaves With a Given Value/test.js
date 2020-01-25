'use strict';

const assert = require('assert');
const _ = require('lodash');
const { removeLeafNodes } = require('./');

describe('#removeLeafNodes', () => {
  const tests = [
    {
      root: '',
      target: 0,
      result: '',
    },
  ];

  _.forEach(tests, ({ root, target, result }) => {
    it(`${root}, ${target} -> ${result}`, () => {
      assert.deepStrictEqual(removeLeafNodes(root, target), result);
    });
  });
});
