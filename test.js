'use strict';
const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const argv = require('minimist')(process.argv.slice(2));
const target = argv.target || argv.t || '.*';
const mainpath = path.resolve(__dirname, 'algorithms');
const reg = new RegExp(`${mainpath}/${target}`);

(function resolve(dirpath) {
  _.forEach(fs.readdirSync(dirpath), filename => {
    const filepath = path.resolve(dirpath, filename);
    if (fs.statSync(filepath).isDirectory()) {
      return resolve(filepath);
    }
    if (/^test(.*).js$/.test(filename) && reg.test(filepath)) {
      require(filepath);
    }
  });
})(mainpath);
