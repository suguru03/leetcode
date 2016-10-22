'use strict';

const fs = require('fs');
const _ = require('lodash');

(function resolve(dirpath, _exports) {
  _.forEach(fs.readdirSync(dirpath), filename => {
    const filepath = `${dirpath}/${filename}`;
    if (fs.statSync(filepath).isDirectory()) {
      return resolve(filepath, _exports[filename] = {});
    }
    if (/^test.(.*).js$/.test(filename)) {
      require(filepath);
    }
  });
})(__dirname, exports);
