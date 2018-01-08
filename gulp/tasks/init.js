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
      required: true
    }
  }
};

async function init() {
  prompt.start();
  const { num } = await prompt.getAsync(schema);

  const base = 'https://leetcode.com';
  const body = await request({
    uri: `${base}/api/problems/all/`,
    json: true
  });
  const item = _.find(body.stat_status_pairs, item => item.stat.question_id === num);
  if (!item) {
    throw new Error(`${num} is not found`);
  }
  const {
    question_id: id,
    question__title: title,
    question__title_slug: slug
  } = item.stat;

  console.log(`Reading leetcode page... id: ${id}, title: ${title}`);
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`${base}/problems/${slug}`);
  await Aigle.delay(2000);
  const text = await page.evaluate(() => document.querySelector('.question-description').textContent);
  const info = await page.evaluate(() => document.querySelector('.CodeMirror').textContent);
  const funcName = info.match(/public:.+\s(.+)\(/)[1];
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

  // create index.js
  const tempIndexPath = path.resolve(__dirname, '../template/index.js');
  const indexFile = fs.readFileSync(tempIndexPath, 'utf8').replace(/template/g, funcName);
  const indexpath = path.resolve(dirpath, 'index.js');
  fs.writeFileSync(indexpath, indexFile);

  // create test.js
  const tempTestPath = path.resolve(__dirname, '../template/test.js');
  const testFile = fs.readFileSync(tempTestPath, 'utf8').replace(/template/g, funcName);
  const testpath = path.resolve(dirpath, 'test.js');
  fs.writeFileSync(testpath, testFile);
}

