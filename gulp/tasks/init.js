'use strict';

const fs = require('fs');
const path = require('path');

const _ = require('lodash');
const gulp = require('gulp');
const Aigle = require('aigle');
const prompt = require('prompt');
const puppeteer = require('puppeteer');
const request = require('request-promise');

Aigle.promisifyAll(prompt);

gulp.task('init', init);

const schema = {
  properties: {
    num: {
      type: 'number',
      message: 'put a problem number',
      required: true,
    },
  },
};

async function init() {
  prompt.start();
  const { num } = await prompt.getAsync(schema);

  const base = 'https://leetcode.com';
  const body = await request({
    uri: `${base}/api/problems/all/`,
    json: true,
  });
  const item = _.find(
    body.stat_status_pairs,
    item => item.stat.question_id === num,
  );
  if (!item) {
    throw new Error(`${num} is not found`);
  }
  const {
    question_id: id,
    question__title: title,
    question__title_slug: slug,
  } = item.stat;

  console.log(`Reading leetcode page... id: ${id}, title: ${title}`);
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // set logal storage
  await page.goto(`${base}`);
  await page.evaluate(() => localStorage.setItem('global_lang', 'javascript'));

  // load the problem page, it may need to adjust the timeout
  await page.goto(`${base}/problems/${slug}`);
  await Aigle.delay(2000);

  // get description
  const text = await page.evaluate(
    () => document.querySelector('.question-description').textContent,
  );
  const codeInfo = await page.evaluate(
    () => document.querySelector('.CodeMirror-code').textContent,
  );
  await browser.close();

  console.log('Creating files...');

  const dirname = `${id}.${title}`;
  const dirpath = path.resolve(__dirname, '../../algorithms', dirname);
  fs.mkdirSync(dirpath);

  // create README
  const url = `${base}/problems/${slug}`;
  const readme = `## ${id}. ${title}\n\n${url}\n\n${text}`;
  const readmepath = path.resolve(dirpath, 'README.md');
  fs.writeFileSync(readmepath, readme);

  const funcRe = /var (.+) = function/;
  const funcName = codeInfo.match(funcRe)[1];
  // if fails, it needs to be fixed.
  const code = codeInfo
    .replace(/\d+/g, '\n')
    .replace(funcRe, 'function $1')
    .replace(/(;|%)/g, '');

  // create index.js
  const tempIndexPath = path.resolve(__dirname, '../template/index');
  const indexFile =
    fs.readFileSync(tempIndexPath, 'utf8').replace(/template/g, funcName) +
    code;
  const indexpath = path.resolve(dirpath, 'index.js');
  fs.writeFileSync(indexpath, indexFile);

  // create test.js
  const tempTestPath = path.resolve(__dirname, '../template/test');
  let testFile = fs
    .readFileSync(tempTestPath, 'utf8')
    .replace(/template/g, funcName);
  try {
    const info = _.chain(code)
      .split(/\n/g)
      .map(line => {
        const [, info, type, key] =
          line.match(/@(param|return) {(.+)} ?(.*)/) || [];
        return !info ? null : { info, type, key };
      })
      .filter()
      .value();
    const testExample = _.transform(
      info,
      (map, info) => assignDefault(map, info),
      {},
    );
    const keys = Object.keys(_.omit(testExample, 'result'));
    const argStr = keys.join(', ');
    testFile = testFile
      .replace(/\$1/, JSON.stringify(testExample, null, 2))
      .replace(/\$2/, argStr ? `${argStr},` : '')
      .replace(/\$3/, keys.map(key => `$\{${key}}`).join(', '))
      .replace(/\$4/, argStr);
  } catch (e) {
    console.log('You need to make test cases');
  }
  const testpath = path.resolve(dirpath, 'test.js');
  fs.writeFileSync(testpath, testFile);
}

function assignDefault(map, { type, key }) {
  key = key || 'result';
  switch (type) {
    case 'number':
      map[key] = 0;
      break;
    case 'string':
      map[key] = '';
      break;
    case 'boolean':
      map[key] = true;
      break;
    default:
      if (/\[\]$/.test(type)) {
        map[key] = [];
      } else {
        map[key] = '';
      }
      break;
  }
}
