import * as assert from 'node:assert';
import * as fs from 'node:fs';
import * as path from 'node:path';
import { execSync } from 'node:child_process';

import * as _ from 'lodash';
import * as prettier from 'prettier';
import * as prompt from 'prompt';
import Aigle from 'aigle';
import axios from 'axios';

import * as config from '../../package.json';

Aigle.promisifyAll(prompt);

const baseUrl = 'https://leetcode.com';
enum Language {
  JavaScript = 'js',
  Rust = 'rs',
  Csharp = 'cs',
}
const langMap: Record<Language, string> = {
  [Language.JavaScript]: 'javascript',
  [Language.Rust]: 'rust',
  [Language.Csharp]: 'csharp',
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

  const { data } = await axios(`${baseUrl}/api/problems/all/`);
  const item = _.find(data.stat_status_pairs, (item) => item.stat.frontend_question_id === num);
  assert.ok(item, `${num} is not found`);
  await createProblem(item.stat, language);
}

function tryAssignValue(map: any, value: any, { type, key }: { type: string; key: string }) {
  key = key || 'result';
  switch (type) {
    case 'number':
      value = Number(value);
      map[key] = Number.isNaN(value) ? 0 : value;
      break;
    case 'string':
      map[key] = value ?? '';
      break;
    case 'boolean':
      map[key] = /true|false/i.test(value) ? /true/.test(value) : true;
      break;
    default:
      try {
        map[key] = JSON.parse(value);
      } catch (e) {
        console.log(`failed to parse value: ${value}`);
        if (/\[]$/.test(type)) {
          map[key] = [];
        } else {
          map[key] = '';
        }
      }
      break;
  }
}

interface CodeSnippet {
  lang: string;
  langSlug: string;
  code: string;
}

interface Question {
  content: string;
  exampleTestcaseList: string[];
  codeSnippets: CodeSnippet[];
}

async function getQuestionDetail(slug: string): Promise<Question> {
  const query = `
    query getQuestionDetail($titleSlug: String!) {
      question(titleSlug: $titleSlug) {
        content
        exampleTestcaseList
        codeSnippets {
          lang
          langSlug
          code
        }
      }
    }
  `;

  const variables = {
    titleSlug: slug,
  };
  const response = await axios.post(
    `${baseUrl}/graphql`,
    { query, variables },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  return response.data.data.question;
}

async function createProblem(stat: any, lang: Language) {
  const { frontend_question_id: qid, question__title: title, question__title_slug: slug } = stat;
  const id = `${qid}`.padStart(4, '0');
  console.log(`Reading leetcode page... id: ${id}, title: ${title}, language: ${lang}`);
  const question = await getQuestionDetail(slug);

  const dirname = `${id}.${title}`;
  const relativeDirPath = path.join('algorithms', dirname);
  const dirPath = path.resolve(__dirname, '../..', relativeDirPath);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  }

  // create README
  const url = `${baseUrl}/problems/${slug}/`;
  const readme = `## ${id}. ${title}\n\n${url}\n\n${question.content}`;
  const readmePath = path.resolve(dirPath, 'README.md');
  if (!fs.existsSync(readmePath)) {
    fs.writeFileSync(readmePath, readme);
  }

  // get description
  const code = question.codeSnippets.find((snippet) => snippet.langSlug === langMap[lang])?.code;
  assert.ok(code, `${lang} not found`);

  console.log(`Creating files... language: ${lang}`);
  switch (lang) {
    case Language.JavaScript: {
      createJavaScript(code, question.exampleTestcaseList, dirPath);
      break;
    }
    case Language.Rust: {
      createRust(code, title, dirPath, relativeDirPath);
      break;
    }
    default: {
      throw new Error(`${lang} is not implemented`);
    }
  }
}

function createJavaScript(code: string, exampleTestcaseList: Question['exampleTestcaseList'], dirPath: string) {
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
    const jsdocInfo = _.chain(code)
      .split(/\n/g)
      .map((line) => {
        const [, info, type, key] = line.match(/@(param|return) {(.+)} ?(.*)/) || [];
        return !info ? null : { info, type, key };
      })
      .filter()
      .value();
    const testExamples = exampleTestcaseList.map((text) => {
      const list = text.split('\n');
      return _.transform(jsdocInfo, (map, info, i) => tryAssignValue(map, list[i], info), {});
    });

    assert.ok(testExamples.length > 0);
    const keys = jsdocInfo.map((info) => info.key).filter((key) => key);
    const argStr = keys.join(', ');
    testFile = testFile
      .replace(/\$1/, JSON.stringify(testExamples, null, 2))
      .replace(/\$2/, argStr ? `${argStr},` : '')
      .replace(/\$3/, keys.map((key) => `$\{${key}}`).join(', '))
      .replace(/\$4/, argStr);
    testFile = prettier.format(testFile, config.prettier);
  } catch (e) {
    console.log('You need to make test cases');
  }
  const testpath = path.resolve(dirPath, 'test.js');
  console.log(testFile);
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
