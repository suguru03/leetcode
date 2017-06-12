'use strict';

const fs = require('fs');
const path = require('path');

const _ = require('lodash');

const basepath = path.resolve(__dirname, 'algorithms');
const base = fs.readFileSync(path.resolve(__dirname, 'templete', 'README.md'), 'utf8');

const re = /^(?!\d)/;
const tasks = _.chain(fs.readdirSync(basepath))
  .reject(dirname => re.test(dirname))
  .map(dirname => {
    const parts = dirname.split('.');
    return {
      num: parts[0],
      name: parts[1],
      url: `https://github.com/suguru03/leetcode/tree/master/algorithms/${dirname.replace(/\s/g, '%20')}`
    };
  })
  .orderBy(['num', 'desc'])
  .value();

if (_.isEmpty(tasks)) {
  return;
}

const readme = _.reduce(tasks, (result, { num, name, url }) => {
  return result + `\n|${num}|[${name}](${url})|`;
}, base + '\n## links\n|#|title|\n|---|---|');

fs.writeFileSync(path.resolve(__dirname, 'README.md'), readme, 'utf8');
