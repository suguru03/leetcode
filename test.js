'use strict';

const fs = require('fs');
const path = require('path');
const assert = require('assert');
const cp = require('child_process');

const _ = require('lodash');
const Aigle = require('aigle');
const exec = Aigle.promisify(cp.exec);

const argv = require('minimist')(process.argv.slice(2));

const target = argv.target || argv.t || '.*';
const java = argv.java;
const mainpath = path.resolve(__dirname, 'algorithms');
const re = new RegExp(`${target}`);

(function resolve(dirpath) {
  _.forEach(fs.readdirSync(dirpath), filename => {
    const filepath = path.resolve(dirpath, filename);
    if (fs.statSync(filepath).isDirectory()) {
      return resolve(filepath);
    }
    if (/^test(.*).js$/.test(filename) && re.test(filepath)) {
      java ? createJavaTest(dirpath) : require(filepath);
    }
  });
})(mainpath);


function createJavaTest(dirpath) {

  // copy Solution.java
  const newsolutionpath = path.resolve(__dirname, 'Solution.java');
  const solutionpath = path.resolve(dirpath, 'Solution.java');
  const solutionfile = fs.readFileSync(solutionpath, 'utf8');
  fs.writeFileSync(newsolutionpath, solutionfile, 'utf8');

  // get function name
  const jspath = path.resolve(dirpath, 'index.js');
  const funcName = _.findKey(require(jspath));

  // get function name and args from Solution.java
  const re = new RegExp(`public (.*) ${funcName}`);
  const resultType = solutionfile.match(re)[1];
  const argre = new RegExp(`${funcName}\\((.*)\\)`);
  const args = solutionfile.match(argre)[1].split(',');
  const argMap = _.transform(args, (result, arg) => {
    const [type, key] = arg.trim().split(/\s/);
    result[key] = type;
  }, {});

  // get tasks from test.js
  const testjspath = path.resolve(dirpath, 'test.js');
  const tasks = require('./lib/test').getTasks(testjspath);

  // create Test.java
  const templatepath = path.resolve(__dirname, 'template', 'Template.java');
  const testpath = path.resolve(__dirname, 'Test.java');

  const template = fs.readFileSync(templatepath, 'utf8');
  const offset = '\n\t\t';

  before(() => exec('javac Solution.java'));
  after(() => exec('rm Solution.* Test.*'));

  let i = 0;
  beforeEach(() => {
    const task = tasks[i++];
    const args = [];
    let str = _.chain(task)
      .omitBy((value, key) => /result/.test(key))
      .reduce((result, value, key) => {
        let s = '';
        const type = argMap[key];
        if (_.isInteger(value)) {
          s = `${key} = ${value};`;
        } else if (_.isNumber(value)) {
          s = `${key} = ${value};`;
        } else if (_.isString(value)) {
          s = `${key} = "${value}";`;
        } else if (_.isArray(value)) {
          s = `${key} = {${value}};`;
        }
        args.push(key);
        return `${result}${offset}${type} ${s}`.trim();
      }, '')
      .value();

    str += `${offset}${resultType} result = new Solution().${funcName}(${args});`;
    switch (resultType) {
    case 'int[]':
      str += `${offset}System.out.println(Arrays.toString(result));`;
      break;
    default:
      str += `${offset}System.out.println(result);`;
      break;
    }
    const file = template.replace(/<% tasks %>/, str);
    fs.writeFileSync(testpath, file, 'utf8');
  });

  _.forEach(tasks, task => {
    const { result } = task;
    const str = _.chain(task)
      .omit('result')
      .reduce((result, value, key) => {
        return `${result} ${key}: ${value}`;
      }, '')
      .add(` -> ${result}`)
      .value();

    it(str, () => {
      return exec('javac Test.java')
        .then(() => exec('java Test'))
        .then(res => {
          const parts = res.split(/\n/g);
          parts.pop();
          res = parts.pop();
          _.forEach(parts, log => console.log(log));
          switch (typeof result) {
          case 'string':
            assert.strictEqual(res, result);
            break;
          case 'number':
            assert.strictEqual(+res, result);
            break;
          case 'object':
            assert.deepEqual(JSON.parse(res), result);
            break;
          default:
            assert.fail();
            break;
          }
        });
    });
  });
}

