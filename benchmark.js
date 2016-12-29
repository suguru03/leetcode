'use strict';

const vm = require('vm');
const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const Benchmark = require('benchmark');

const argv = require('minimist')(process.argv.slice(2));
const target = argv.target || argv.t || '';
const reg = new RegExp(`(?=.*${__dirname})` + (target ? `(?=.*${target})` : ''));

const targets = {};
const context = global;
context.__dirname = __dirname;
context.require = name => {
  const file = require(name);
  if (reg.test(name)) {
    const testpath = path.resolve(name, '..');
    const keyReg = new RegExp(testpath.split('/').pop().split(' ').shift());
    const key = _.findKey(targets, (func, key) => keyReg.test(key));
    if (!key) {
      console.log(`Not found ${keyReg}`);
    } else {
      targets[key].funcs = require(testpath);
    }
  }
  return file;
};

global.describe = (name, func) => {
  const str = `(${func.toString()})()`;
  const forEach = tasks => targets[name] = { tasks };
  const context = { console, _: { forEach }, it: _.noop };
  vm.runInNewContext(str, context);
};

const testpath = path.resolve(__dirname, 'test.js');
vm.runInNewContext(fs.readFileSync(testpath), context);

const suite = new Benchmark.Suite();

_.forOwn(targets, ({ tasks, funcs }, name) => {
  if (!_.isPlainObject(funcs)) {
    return;
  }
  const task = _.sample(tasks);
  // TODO two arguments
  const arg = _.find(task, (value, key) => key !== 'result');
  console.log(`name:${name}, task:${JSON.stringify(task, null, 2)}`);
  _.forOwn(funcs, func => suite.add(func.name, () => func(arg)));
});

suite.on('complete', ({ currentTarget }) => {
  _.chain(currentTarget)
    .map(({ name, stats, error }) => {
      const { mean } = stats;
      return { name, mean, error };
    })
    .sortBy('mean')
    .forEach(({ name, mean, error }, index) => {
      console.log(`[${++index}]${name}\t${error||mean}`);
    })
    .value();

})
.run();
