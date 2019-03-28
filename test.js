'use strict';

const fs = require('fs');
const path = require('path');
const assert = require('assert');
const cp = require('child_process');

const _ = require('lodash');
const Aigle = require('aigle');

const argv = require('minimist')(process.argv.slice(2));

const target = argv.target || argv.t || '.*';
const { java, ruby, debug } = argv;
const mainpath = path.resolve(__dirname, 'algorithms');
const re = new RegExp(`${target}`);

(function resolve(dirpath) {
  _.forEach(fs.readdirSync(dirpath), filename => {
    const filepath = path.resolve(dirpath, filename);
    if (fs.statSync(filepath).isDirectory()) {
      return resolve(filepath);
    }
    if (/^test(.*).js$/.test(filename) && re.test(filepath)) {
      try {
        java ? createJavaTest(dirpath) : ruby ? createRubyTest(dirpath) : require(filepath);
      } catch (e) {
        debug && console.error(e.message, filepath);
      }
    }
  });
})(mainpath);

function createJavaTest(dirpath) {
  // copy Solution.java
  const testname = dirpath.match(/\d+/)[0];
  const newsolutionpath = path.resolve(__dirname, 'Solution.java');
  const solutionpath = path.resolve(dirpath, 'Solution.java');
  const solutionfile = fs.readFileSync(solutionpath, 'utf8');

  // get function name
  const jspath = path.resolve(dirpath, 'index.js');
  const funcName = _.findKey(require(jspath));

  // get function name and args from Solution.java
  const re = new RegExp(`public (.*) ${funcName}`);
  const resultType = solutionfile.match(re)[1];
  const argre = new RegExp(`${funcName}\\((.*)\\)`);
  const args = solutionfile.match(argre)[1].split(',');
  const argMap = _.transform(
    args,
    (result, arg) => {
      const [type, key] = arg.trim().split(/\s/);
      result[key] = type;
    },
    {},
  );

  // get tasks from test.js
  const testjspath = path.resolve(dirpath, 'test.js');
  const tasks = require('./lib/test').getTasks(testjspath);

  // create Test.java
  const templatepath = path.resolve(__dirname, 'template', 'Template.java');
  const testpath = path.resolve(__dirname, 'Test.java');

  const template = fs.readFileSync(templatepath, 'utf8');
  const offset = '\n\t\t';

  describe(`#${testname}`, () => {
    before(() => {
      fs.writeFileSync(newsolutionpath, solutionfile, 'utf8');
      return exec('javac Solution.java');
    });
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

      it(str, async () => check(result, await exec('javac Test.java && java Test')));
    });
  });
}

function createRubyTest(dirpath) {
  const testname = dirpath.match(/\d+/)[0];
  const filepath = path.resolve(dirpath, 'solution.rb');
  const testpath = path.resolve(__dirname, `${testname}.rb`);
  const file = fs.readFileSync(filepath, 'utf8');
  const [, funcName, argsStr] = file.match(/def (.*)\((.*)\)/);
  const args = argsStr.split(',').map(s => s.trim());
  const optionals = args.map(arg => /.+=.+/.test(arg));
  const Optional = Symbol('optional');

  const templatepath = path.resolve(__dirname, 'template', 'template.rb');
  const template = fs.readFileSync(templatepath, 'utf8');

  // get tasks from test.js
  const testjspath = path.resolve(dirpath, 'test.js');
  const tasks = require('./lib/test').getTasks(testjspath);

  describe(`#${testname}`, () => {
    beforeEach(() => {
      const task = tasks.shift();
      const argsStr = _.chain(args)
        .map((arg, index) => {
          const value = task[arg];
          switch (typeof value) {
            case 'undefined':
              return optionals[index] ? Optional : 'nil';
            case 'string':
              return `'${value}'`;
            case 'object':
              return `[${value}]`;
            default:
              return value;
          }
        })
        .filter(v => v !== Optional)
        .join(',')
        .value();
      const file = template
        .replace(/<% filepath %>/, `'${filepath}'`)
        .replace(/<% func %>/, funcName)
        .replace(/<% args %>/, argsStr);
      fs.writeFileSync(testpath, file, 'utf8');
    });

    after(() => exec(`rm ${testpath}`));

    _.forEach(tasks, task => {
      const { result } = task;
      const str = _.chain(task)
        .omit('result')
        .reduce((result, value, key) => {
          return `${result} ${key}: ${value}`;
        }, '')
        .add(` -> ${result}`)
        .value();
      it(str, async () => check(result, await exec(`ruby ${testpath}`)));
    });
  });
}

function check(result, res) {
  const logs = res.split(/\n/g);
  logs.pop();
  res = logs.pop();
  _.forEach(logs, log => console.log(log));
  switch (typeof result) {
    case 'boolean':
      assert.strictEqual(/true/.test(res), result);
      break;
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
}

function exec(command, args) {
  command = !args ? command : _.reduce(args, (str, arg) => `${str} ${arg}`, command);
  return execute(cp.exec, command);
}

function execute(func, command, args) {
  return new Aigle((resolve, reject) => {
    let result = '';
    const task = func(command, args);
    task.on('close', err => (err ? reject(result) : resolve(result)));
    task.stdout.on('data', data => (result += `${data}`));
    task.stderr.on('data', data => (result += `${data}`));
  });
}
