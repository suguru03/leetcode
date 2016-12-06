'use strict';

const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const argv = require('minimist')(process.argv.slice(2));
const target = argv.target || argv.t;
const reg = new RegExp(`${target||'.*'}`);
console.log(reg);
const selfpath = path.resolve(__dirname, 'test.js');

(function resolve(dirpath, _exports) {
  _.forEach(fs.readdirSync(dirpath), filename => {
    const filepath = path.resolve(dirpath, filename);
    if (/^(node_modules|.git)$/.test(filename) || selfpath === filepath) {
      return;
    }
    if (fs.statSync(filepath).isDirectory()) {
      return resolve(filepath, _exports[filename] = {});
    }
    if (/^test(.*).js$/.test(filename) && reg.test(filepath)) {
      require(filepath);
    }
  });
})(__dirname, exports);
