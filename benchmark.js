'use strict';

const vm = require('vm');
const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const { Suite } = require('benchmark');
const util = require('./algorithms/util');

const argv = require('minimist')(process.argv.slice(2));
const target = argv.target || argv.t;
const baseReStr = `(?=.*${__dirname})` + (target ? `(?=.*${target})` : '');
const re = {
  target: new RegExp(baseReStr),
  trace: new RegExp(`${baseReStr}(?=.*test.js)`),
  match: /^.*algorithms\/(.*)\/test.js/,
  funcArgs: /^(function)?\s*[^\(]*\(\s*([^\)]*)\)/m,
  funcArgSplit: /,/,
  funcArg: /(=.+)?(\s*)$/,
  stripComments: /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg
};

const targets = {};
global.__dirname = __dirname;
global.require = name => {
  const file = require(name);
  if (re.target.test(name)) {
    const key = _.get(name.match(re.match), [1]);
    if (!key || !targets[key]) {
      console.log(`Not found ${key}`);
    } else {
      const testpath = path.resolve(name, '..');
      targets[key].funcs = require(testpath);
    }
  }
  return file;
};

global.describe = (name, func) => {
  const str = `(${func.toString()})()`;
  const forEach = (tasks, iterator) => {
    _.forEach(tasks, iterator);
    const traces = new Error().stack.split(/\n/g);
    const targetTrace = _.find(traces, trace => re.trace.test(trace));
    if (!targetTrace) {
      return;
    }
    const key = _.get(targetTrace.match(re.match), [1]);
    if (!key) {
      return;
    }
    targets[key] = { tasks };
  };
  const context = Object.assign({ console, it: _.noop, _: { forEach } }, util);
  vm.runInNewContext(str, context);
};

const testpath = path.resolve(__dirname, 'test.js');
vm.runInThisContext(fs.readFileSync(testpath));

_.forOwn(targets, ({ tasks, funcs }, name) => {
  if (!_.isPlainObject(funcs) || _.size(funcs) < 2) {
    return;
  }
  const suite = new Suite();
  const task = _.sample(tasks);
  const { result } = task;
  console.log(`\nname: ${name} \ntask: ${JSON.stringify(task, null, 2)}`);
  _.forOwn(funcs, func => {
    const { name } = func;
    const args = _.chain(task)
      .pick(parseArgs(func.toString()))
      .toArray()
      .value();
    if (!_.isEqual(func.apply(null, args), result)) {
      throw new Error(`Failed ${name}`);
    }
    suite.add(name, () => func.apply(null, args));
  });

  suite.on('complete', ({ currentTarget }) => {
    const nameLength = _.chain(currentTarget)
      .map(({ name }) => name.length)
      .max()
      .value();

    _.chain(currentTarget)
      .map(({ name, stats, error }) => {
        const { mean } = stats;
        return { name, mean, error };
      })
      .sortBy('mean')
      .forEach(({ name, mean, error }, index) => {
        console.log(`[${++index}]${name}${Array(nameLength - name.length + 2).join(' ')}${error||mean}`);
      })
      .value();

  })
  .run();
});

function parseArgs(code) {
  code = code.replace(re.stripComments, '');
  code = code.match(re.funcArgs)[2].replace(' ', '');
  code = code ? code.split(re.funcArgSplit) : [];
  return code.map(arg => arg.replace(re.funcArg, '').trim());
}
