'use strict';

const fs = require('fs');
const path = require('path');

const _ = require('lodash');

const basepath = path.resolve(__dirname, 'algorithms');
const base = fs.readFileSync(path.resolve(__dirname, 'template', 'README.md'), 'utf8');

const re = /^(?!\d)/;
const baseurl = 'https://github.com/suguru03/leetcode/tree/master/algorithms/';
const jsfilename = 'index.js';
const javafilename = 'Solution.java';
const tasks = _.chain(fs.readdirSync(basepath))
  .reject(dirname => re.test(dirname))
  .map(dirname => {
    const [num, name] = dirname.split('.');
    const filenames = fs.readdirSync(path.resolve(basepath, dirname));
    const url = `${baseurl}${dirname.replace(/\s/g, '%20')}`;
    const js = _.includes(filenames, jsfilename) && `${url}/${jsfilename}` || '';
    const java = _.includes(filenames, javafilename) && `${url}/${javafilename}` || '';
    return { num, name, url, js, java };
  })
  .value();

if (_.isEmpty(tasks)) {
  return;
}

const readme = _.reduce(tasks, (result, { num, name, url, js, java }) => {
  const solution = _.chain({ js, java })
    .omitBy(_.isEmpty)
    .map((url, key) => `[${key}](${url})`)
    .join(', ')
    .value();
  return result + `\n|${num}|[${name}](${url})|${solution}|`;
}, base + '\n## Links\n|#|Title|Solution|\n|---|---|---|');

fs.writeFileSync(path.resolve(__dirname, 'README.md'), readme, 'utf8');
