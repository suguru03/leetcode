'use strict';

const fs = require('fs');
const path = require('path');

const _ = require('lodash');

const basepath = path.resolve(__dirname, 'algorithms');
const base = fs.readFileSync(path.resolve(__dirname, 'template', 'README.md'), 'utf8');

const re = /^(?!\d)/;
const baseurl = 'https://github.com/suguru03/leetcode/tree/master/algorithms/';
const solutionMap = {
  js: 'index.js',
  java: 'Solution.java',
  ruby: 'solution.rb',
  sql: 'query.sql',
  bash: 'solution.bash'
};
const tasks = _.chain(fs.readdirSync(basepath))
  .reject(dirname => re.test(dirname))
  .map(dirname => {
    const [num, name] = dirname.split('.');
    const url = `${baseurl}${dirname.replace(/\s/g, '%20')}`;
    const filenames = fs.readdirSync(path.resolve(basepath, dirname));
    const map = _.transform(filenames, (result, name) => result[name] = name, {});
    const filepathMap = _.chain(solutionMap)
      .mapValues(name => map[name] && `${url}/${name}`)
      .omitBy(_.isUndefined)
      .value();
    return !_.isEmpty(filepathMap) && Object.assign({ num, name, url }, filepathMap);
  })
  .filter()
  .value();

if (_.isEmpty(tasks)) {
  return;
}

const readme = _.reduce(tasks, (result, obj) => {
  const { num, name, url } = obj;
  const solution = _.chain(obj)
    .pick(_.keys(solutionMap))
    .map((url, key) => `[${key}](${url})`)
    .join(', ')
    .value();
  return result + `\n|${num}|[${name}](${url})|${solution}|`;
}, base + '\n## Links\n|#|Title|Solution|\n|---|---|---|');

fs.writeFileSync(path.resolve(__dirname, 'README.md'), readme, 'utf8');
