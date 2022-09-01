import * as fs from 'fs';
import * as path from 'path';
import * as _ from 'lodash';

const rootdir = path.resolve(__dirname, '../..');
const basepath = path.resolve(rootdir, 'algorithms');
const base = fs.readFileSync(path.resolve(rootdir, 'template', 'README.md'), 'utf8');

const re = /^(?!\d)/;
const baseurl = 'https://github.com/suguru03/leetcode/tree/master/algorithms/';
const solutionMap = {
  js: 'index.js',
  ts: 'index.ts',
  go: 'solution.go',
  python: 'solution.py',
  rust: 'solution.rs',
  java: 'Solution.java',
  ruby: 'solution.rb',
  cpp: 'solution.cpp',
  sql: 'query.sql',
  bash: 'solution.bash',
  cs: 'Solution.cs',
};

export async function buildDoc() {
  const tasks = _.chain(fs.readdirSync(basepath))
    .reject((dirname) => re.test(dirname))
    .map((dirname) => {
      const [num, name] = dirname.split('.');
      const url = `${baseurl}${dirname.replace(/\s/g, '%20')}`;
      const filenames = fs.readdirSync(path.resolve(basepath, dirname));
      const map = _.transform(filenames, (result, name) => (result[name] = name), {});
      const filepathMap = _.chain(solutionMap)
        .mapValues((name) => map[name] && `${url}/${name}`)
        .omitBy(_.isUndefined)
        .value();
      return !_.isEmpty(filepathMap) && Object.assign({ num, name, url }, filepathMap);
    })
    .filter()
    .reverse()
    .value();

  if (_.isEmpty(tasks)) {
    return;
  }

  console.log('building README...');

  const readme = _.reduce(
    tasks,
    (result, obj) => {
      const { num, name, url } = obj;
      const solution = _.chain(obj)
        .pick(_.keys(solutionMap))
        .map((url, key) => `[${key}](${url})`)
        .join(', ')
        .value();
      return result + `\n|${num}|[${name}](${url})|${solution}|`;
    },
    base + '\n## Links\n|#|Title|Solution|\n|---|---|---|',
  );
  fs.writeFileSync(path.resolve(rootdir, 'README.md'), readme, 'utf8');
}
