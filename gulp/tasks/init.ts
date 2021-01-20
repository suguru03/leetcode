import * as _ from 'lodash';
import * as fs from 'fs';
import * as path from 'path';
import * as prettier from 'prettier';
import * as prompt from 'prompt';
import * as puppeteer from 'puppeteer';
import Aigle from 'aigle';
import axios from 'axios';
import { execSync } from 'child_process';

import * as config from '../../package.json';

Aigle.promisifyAll(prompt);

const base = 'https://leetcode.com';
enum Language {
  JavaScript = 'js',
  Rust = 'rs',
}
const langMap: Record<Language, string> = {
  [Language.JavaScript]: 'javascript',
  [Language.Rust]: 'rust',
};

const schema = {
  properties: {
    num: {
      type: 'number',
      message: 'put a problem number',
      required: true,
    },
    language: {
      type: 'string',
      message: `put a language [${Object.values(Language)}]`,
    },
  },
};

export async function init() {
  prompt.start();
  const { num, language = Language.JavaScript } = await prompt.getAsync(schema);

  const { data } = await axios(`${base}/api/problems/all/`);
  const item = _.find(data.stat_status_pairs, (item) => item.stat.frontend_question_id === num);
  if (!item) {
    throw new Error(`${num} is not found`);
  }
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await setLanguage(page, language);

  // load the problem page, it may need to adjust the timeout
  await createProblem(page, item.stat, language);
  await browser.close();
}

function assignDefault(map: any, { type, key }) {
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
      if (/\[]$/.test(type)) {
        map[key] = [];
      } else {
        map[key] = '';
      }
      break;
  }
}

async function setLanguage(page: any, lang: Language) {
  // set local storage
  await page.goto(`${base}`);
  await page.evaluate((language: string) => localStorage.setItem('global_lang', language), langMap[lang]);
}

async function createProblem(page: any, stat: any, lang: Language) {
  const { frontend_question_id: qid, question__title: title, question__title_slug: slug } = stat;
  const id = `${qid}`.padStart(4, '0');
  const url = `${base}/problems/${slug}`;
  await page.goto(url);
  console.log(`Reading leetcode page... id: ${id}, title: ${title}, language: ${lang}`);

  // wait until page is loaded
  let count = 0;
  const iterator = () => {
    if (++count > 5) {
      throw new Error('class not found');
    }
    return page.evaluate(() => {
      try {
        return document.querySelector('*[data-cy=question-detail-main-tabs]').children[1].querySelector('div')
          .children[1].textContent;
      } catch (e) {
        return '';
      }
    });
  };
  const tester = (text) => (text ? true : Aigle.delay(1000, false));
  const text = await Aigle.doUntil(iterator, tester);
  const dirname = `${id}.${title}`;
  const relativeDirPath = path.join('algorithms', dirname);
  const dirPath = path.resolve(__dirname, '../..', relativeDirPath);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  }

  // create README
  const readme = `## ${id}. ${title}\n\n${url}\n\n${text}`;
  const regex = / /g;
  const readmePath = path.resolve(dirPath, 'README.md');
  if (!fs.existsSync(readmePath)) {
    fs.writeFileSync(readmePath, readme.replace(regex, ''));
  }

  // get description
  let code = await page.evaluate(() => {
    const dom = document.querySelectorAll('.CodeMirror-line');
    return Array.from(dom, (element) => element.textContent).join('\n');
  });
  code = code.replace(regex, '');

  console.log(`Creating files... language: ${lang}`);
  switch (lang) {
    case Language.JavaScript: {
      createJavaScript(code, dirPath);
      break;
    }
    case Language.Rust: {
      createRust(code, title, dirPath, relativeDirPath);
      break;
    }
  }
}

function createJavaScript(code: string, dirPath: string) {
  const funcRe = /var (.+) = function/;
  const funcName = code.match(funcRe)[1];
  code = code.replace(funcRe, 'function $1').replace(/[;%]/g, '');
  code = prettier.format(code, config.prettier);

  // create index.js
  const tplIndexPath = path.resolve(__dirname, '../template/js/index.js.tpl');
  const indexFile = fs.readFileSync(tplIndexPath, 'utf8').replace(/template/g, funcName) + code;
  const indexPath = path.resolve(dirPath, 'index.js');
  if (fs.existsSync(indexPath)) {
    throw new Error('Already exists');
  }
  fs.writeFileSync(indexPath, indexFile);

  // create test.js
  const tplTestPath = path.resolve(__dirname, '../template/js/test.js.tpl');
  let testFile = fs.readFileSync(tplTestPath, 'utf8').replace(/template/g, funcName);
  try {
    const info = _.chain(code)
      .split(/\n/g)
      .map((line) => {
        const [, info, type, key] = line.match(/@(param|return) {(.+)} ?(.*)/) || [];
        return !info ? null : { info, type, key };
      })
      .filter()
      .value();
    const testExample = _.transform(info, (map, info) => assignDefault(map, info), {});
    const keys = Object.keys(_.omit(testExample, 'result'));
    const argStr = keys.join(', ');
    testFile = testFile
      .replace(/\$1/, JSON.stringify(testExample, null, 2))
      .replace(/\$2/, argStr ? `${argStr},` : '')
      .replace(/\$3/, keys.map((key) => `$\{${key}}`).join(', '))
      .replace(/\$4/, argStr);
    testFile = prettier.format(testFile, config.prettier);
  } catch (e) {
    console.log('You need to make test cases');
  }
  const testpath = path.resolve(dirPath, 'test.js');
  fs.writeFileSync(testpath, testFile);
}

function createRust(code: string, title: string, dirPath: string, relativeDirPath: string) {
  const cargoFile = fs
    .readFileSync(path.resolve(__dirname, '../template/rust/Cargo.toml.tpl'), 'utf8')
    .replace(/\$1/, _.kebabCase(title))
    .replace(/\$2/, _.snakeCase(title));
  const cargoPath = path.resolve(dirPath, 'Cargo.toml');
  if (fs.existsSync(cargoPath)) {
    throw new Error('Already exists');
  }
  fs.writeFileSync(cargoPath, cargoFile);
  const [, functionName] = code.match(/pub fn (.+)\(/) ?? [];
  if (!functionName) {
    throw new Error('Function name not found');
  }
  const solutionFile = fs
    .readFileSync(path.resolve(__dirname, '../template/rust/solution.rs.tpl'), 'utf8')
    .replace(/\$1/, code)
    .replace(/\$2/, `Solution::${functionName}()`);
  const solutionPath = path.resolve(dirPath, 'solution.rs');
  fs.writeFileSync(solutionPath, solutionFile);

  // update members
  const rootCargoFilePath = path.resolve(__dirname, '../../', 'Cargo.toml');
  const rootCargo = fs.readFileSync(rootCargoFilePath, 'utf8');
  const regex = /(members = )(\[[\s\S]*])/;
  const [, , str] = rootCargo.match(regex);
  const members = JSON.parse(str);
  members.push(relativeDirPath);
  members.sort();
  fs.writeFileSync(rootCargoFilePath, rootCargo.replace(regex, `$1${JSON.stringify(members, null, 2)}`));
  const command = `cargo test --lib -p '${_.kebabCase(title)}'`;
  console.log(`test command [ctrl+v]: ${command}`);
  execSync(`echo "${command}" | pbcopy`);
}
