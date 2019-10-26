'use strict';

const assert = require('assert');
const _ = require('lodash');
const { removeSubfolders } = require('./');

describe('#removeSubfolders', () => {
  const tests = [
    {
      folder: ['/a', '/a/b', '/c/d', '/c/d/e', '/c/f'],
      result: ['/a', '/c/d', '/c/f'],
    },
    {
      folder: ['/a', '/a/b/c', '/a/b/d'],
      result: ['/a'],
    },
    {
      folder: ['/a/b/c', '/a/b/ca', '/a/b/d'],
      result: ['/a/b/c', '/a/b/ca', '/a/b/d'],
    },
  ];

  _.forEach(tests, ({ folder, result }) => {
    it(`${folder} -> ${result}`, () => {
      assert.deepStrictEqual(removeSubfolders(folder), result);
    });
  });
});
