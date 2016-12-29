'use strict';

const vm = require('vm');
const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const { Suite } = require('benchmark');

const argv = require('minimist')(process.argv.slice(2));
const target = argv.target || argv.t || '';
const reg = new RegExp(`(?=.*${__dirname})` + (target ? `(?=.*${target})` : ''));

const targets = {};
global.__dirname = __dirname;
global.require = name => {
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
vm.runInThisContext(fs.readFileSync(testpath));


_.forOwn(targets, ({ tasks, funcs }, name) => {
  if (!_.isPlainObject(funcs)) {
    return;
  }
  const suite = new Suite();
  const task = _.sample(tasks);
  const { result } = task;
  // TODO two arguments
  const arg = _.find(task, value => value !== result);
  console.log(`\n${name}, task:${JSON.stringify(task, null, 2)}`);
  _.forOwn(funcs, func => {
    if (!_.isEqual(func(arg), result)) {
      throw new Error(`Failed ${func.name}`);
    }
    suite.add(func.name, () => func(arg));
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

