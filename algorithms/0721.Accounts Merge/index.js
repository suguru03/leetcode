'use strict';

module.exports = { accountsMerge };

/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
function accountsMerge(accounts) {
  const parentMap = new Map();
  const nameMap = new Map();

  const find = (email) => {
    if (parentMap.get(email) !== email) {
      parentMap.set(email, find(parentMap.get(email)));
    }
    return parentMap.get(email);
  };

  const union = (e1, e2) => {
    parentMap.set(find(e1), find(e2));
  };
  for (const [name, ...emails] of accounts) {
    for (const email of emails) {
      if (!parentMap.has(email)) {
        parentMap.set(email, email);
      }
      nameMap.set(email, name);
      const [first] = emails;
      union(email, first);
    }
  }
  const emailsMap = new Map();
  for (const email of parentMap.keys()) {
    const parent = find(email);
    const list = emailsMap.get(parent) ?? [];
    list.push(email);
    emailsMap.set(parent, list);
  }
  return Array.from(emailsMap, ([email, list]) => [nameMap.get(email), ...list.sort()]);
}
