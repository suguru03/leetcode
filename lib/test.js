'use strict';

const _ = require('lodash');
const { Agent } = require('vm-agent');

Object.assign(exports, { getTasks });

function getTasks(filepath) {
  let tasks;
  const describe = (name, func) => {
    const lodash = _.clone(_);
    lodash.forEach = _.noop;
    const result = new Agent(func, { _: lodash, console }).run().getInnerVariable();
    tasks = result.tests;
  };
  new Agent(filepath, { describe }).run();
  return tasks;
}
