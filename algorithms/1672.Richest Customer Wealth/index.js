'use strict';

module.exports = { maximumWealth };

const _ = require('lodash');

/**
 * @param {number[][]} accounts
 * @return {number}
 */
function maximumWealth(accounts) {
  return _.chain(accounts).map(_.sum).max().value();
}
